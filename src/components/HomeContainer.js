import React from 'react';
import { compose } from 'redux';
import { BookList, Home } from '../components';
import { withErrorHandling, withLoading } from './higher_order_components';
import { olApi, isValid } from '../Utils';

const BookListWithErrorHandlingAndLoading = compose(withErrorHandling, withLoading)(BookList);

class HomeContainer extends React.Component
{
    state = { bookList: [], isSearching: false, errorMessage: '' };

    onSearchSubmit = (searchPhrase, searchBy) =>
    {
        this.setState({ bookList: [], isSearching: isValid(searchPhrase), errorMessage: '' });

        if (isValid(searchPhrase))
        {
            olApi.get(`search.json?${ searchBy }=${ searchPhrase }`).then((response) =>
            {
                this.setState((response.data.docs.length > 0) ? { isSearching: false, bookList: response.data.docs } : { isSearching: false, errorMessage: 'Nothing found...' });
            }).catch(() =>
            {
                this.setState({ isSearching: false, errorMessage: 'Search failed!' });
            });
        }
    }

    render()
    {
        return <Home onSearchSubmit={ this.onSearchSubmit } bookList={ <BookListWithErrorHandlingAndLoading errorMessage={ this.state.errorMessage } isLoading={ this.state.isSearching } list={ this.state.bookList } /> } />;
    }
}

export default HomeContainer;