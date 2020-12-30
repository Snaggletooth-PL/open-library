import React from 'react';
import { BookList, ErrorMessage, Loader, Search } from '../components';
import { olApi, isValid } from '../Utils';

class Home extends React.Component
{
    state = { bookList: null, isSearching: false, errorMessage: '' };

    onSearchSubmit = (searchPhrase, searchBy) =>
    {
        this.setState({ bookList: null, isSearching: isValid(searchPhrase) });

        olApi.get(`search.json?${ searchBy }=${ searchPhrase }`).then((response) =>
        {
            this.setState({ isSearching: false, errorMessage: '' });

            if (isValid(searchPhrase))
            {
                this.setState({ bookList: response.data.docs });
            }
        }).catch(() =>
        {
            this.setState({ isSearching: false });

            if (isValid(searchPhrase))
            {
                this.setState({ errorMessage: 'Search failed!' });
            }
        });
    }

    render()
    {
        let element = null;

        if (this.state.bookList)
        {
            element = (this.state.bookList.length > 0) ? <BookList list={ this.state.bookList } /> : <ErrorMessage message="Nothing found..." />;
        }
        else if (this.state.isSearching)
        {
            element = <Loader />;
        }
        else if (this.state.errorMessage)
        {
            element = <ErrorMessage message={ this.state.errorMessage } />;
        }

        return (
            <div>

                <h2 className="font-weight-bold"><i className="fas fa-home"></i> Home</h2>

                <div className="m-4">
                    <Search onSubmit={ this.onSearchSubmit } />
                </div>

                { element }

            </div>
        );
    }
}

export default Home;