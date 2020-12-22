import React from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import { olApi, isValid } from './Utils';

class Home extends React.Component
{
    state = { resultList: null, isSearching: false, errorMessage: '' };

    onSearchSubmit = (searchPhrase) =>
    {
        this.setState({ resultList: null, isSearching: isValid(searchPhrase) });

        olApi.get('search.json', { params: { title: searchPhrase } }).then((response) =>
        {
            this.setState({ isSearching: false, errorMessage: '' });

            if (isValid(searchPhrase))
            {
                this.setState({ resultList: response.data.docs });
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

        if (this.state.resultList)
        {
            element = <SearchResult resultList={ this.state.resultList } />;
        }
        else if (this.state.isSearching)
        {
            element = <div className="loading"></div>;
        }
        else if (this.state.errorMessage)
        {
            element = <div className="text-center"><h4 className="text-danger">{ this.state.errorMessage }</h4></div>;
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