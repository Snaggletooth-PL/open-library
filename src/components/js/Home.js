import React from 'react';
import BookList from '../js/BookList';
import Search from '../js/Search';
import { olApi, isValid } from './Utils';

class Home extends React.Component {
    state = { bookList: [], bookSearching: false, errorMessage: '' };

    onSearchSubmit = (searchPhrase) => {
        this.setState({ bookList: [], bookSearching: isValid(searchPhrase) });

        olApi.get('search.json', {
            params: { title: searchPhrase }
        }).then((response) => {
            this.setState({ bookSearching: false, errorMessage: '' });

            if (isValid(searchPhrase)) {
                this.setState({ bookList: response.data.docs });
            }
        }).catch(() => {
            this.setState({ bookSearching: false });

            if (isValid(searchPhrase)) {
                this.setState({ errorMessage: 'Search failed!' });
            }
        });
    }

    render() {
        let searchResult = <BookList list={this.state.bookList} />

        if (this.state.bookSearching) {
            searchResult = <div className="loader"></div>
        }
        else if (this.state.errorMessage) {
            searchResult = <div className="text-center"><h4 className="text-danger">{this.state.errorMessage}</h4></div>
        }

        return (
            <div>

                <h2 className="font-weight-bold"><i className="fas fa-home"></i> Home</h2>

                <div className="m-5">
                    <Search onSubmit={this.onSearchSubmit} />
                </div>

                {searchResult}

            </div>
        );
    }
}

export default Home;