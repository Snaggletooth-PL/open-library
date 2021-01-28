import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getFilteredBookList, getSortedBookList, getPaginatedBookList } from '../redux/selectors';
import { BookList, Home } from '../components';
import { withErrorMessage, withLoading } from './higher_order_components';
import { isBoolean, isString } from '../utils';

const BookListWithErrorHandlingAndLoading = compose(withErrorMessage, withLoading)(BookList);

class HomeContainer extends React.Component
{
    state = { isSearching: false, errorMessage: (this.props.bookList.length) ? '' : ' ' };

    setSearching = (isSearching) =>
    {
        this.setState({ isSearching: isBoolean(isSearching) ? isSearching : false });
    };

    setErrorMessage = (errorMessage) =>
    {
        this.setState({ errorMessage: isString(errorMessage) ? errorMessage : '' });
    };

    render()
    {
        return <Home setSearching={ this.setSearching } setErrorMessage={ this.setErrorMessage } bookList={ <BookListWithErrorHandlingAndLoading errorMessage={ this.state.errorMessage } isLoading={ this.state.isSearching } list={ this.props.bookList } currentNumberOfBooks={ this.props.currentNumberOfBooks } /> } />;
    }
}

const mapStateToProps = (state) =>
{
    let filteredBookList = getFilteredBookList(state.bookList, state.bookListFilter);

    return { bookList: getPaginatedBookList(getSortedBookList(filteredBookList, state.bookListSort), state.bookListPagination), currentNumberOfBooks: filteredBookList.length };
};

export default connect(mapStateToProps)(HomeContainer);