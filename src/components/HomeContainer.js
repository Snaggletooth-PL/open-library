import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchBookList, clearBookList } from '../redux/actions';
import { getFilteredBookList, getSortedBookList, getPaginatedBookList } from '../redux/selectors';
import { BookList, Home } from '../components';
import { withErrorMessage, withLoading } from './higher_order_components';
import { olApi, isValid } from '../utils';

const BookListWithErrorHandlingAndLoading = compose(withErrorMessage, withLoading)(BookList);

class HomeContainer extends React.Component
{
    state = { isSearching: false, errorMessage: (this.props.bookList.length > 0) ? '' : ' ' };

    onSearchSubmit = (searchPhrase, searchBy) =>
    {
        this.setState({ isSearching: isValid(searchPhrase), errorMessage: '' });
        this.props.clearBookList();

        if (isValid(searchPhrase))
        {
            olApi.get(`search.json?${ searchBy }=${ searchPhrase }`).then((response) =>
            {
                this.setState({ isSearching: false });
                let list = response.data.docs;

                if (list.length)
                {
                    this.props.fetchBookList(list);
                }
                else
                {
                    this.setState({ errorMessage: 'Nothing found...' });
                }
            }).catch(() =>
            {
                this.setState({ isSearching: false, errorMessage: 'Search failed!' });
            });
        }
        else
        {
            this.setState({ errorMessage: ' ' });
        }
    };

    render()
    {
        return <Home onSearchSubmit={ this.onSearchSubmit } bookList={ <BookListWithErrorHandlingAndLoading errorMessage={ this.state.errorMessage } isLoading={ this.state.isSearching }
            list={ this.props.bookList } currentNumberOfBooks={ this.props.currentNumberOfBooks } /> } />;
    }
}

const mapStateToProps = (state) =>
{
    let filteredBookList = getFilteredBookList(state.bookList, state.bookListFilter);

    return { bookList: getPaginatedBookList(getSortedBookList(filteredBookList, state.bookListSort), state.bookListPagination), currentNumberOfBooks: filteredBookList.length };
};

const mapDispatchToProps = { fetchBookList, clearBookList };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);