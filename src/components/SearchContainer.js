import React from 'react';
import { connect } from 'react-redux';
import { setBookSearchPhrase, setBookSearchCategory, fetchBookList, clearBookList } from '../redux/actions';
import { Search } from '../components';
import { olApi, isValid } from '../utils';

class SearchContainer extends React.Component
{
    onSearchInputChange = (event) =>
    {
        this.props.setBookSearchPhrase(event.target.value)
    };

    onSearchCategoryDropdownMenuItemClick = (event) =>
    {
        this.props.setBookSearchCategory(event.target.textContent);
    };

    onSubmit = (event) =>
    {
        event.preventDefault();

        let isSearchPhraseValid = isValid(this.props.searchPhrase);
        this.props.setSearching(isSearchPhraseValid);
        this.props.setErrorMessage('');
        this.props.clearBookList();

        if (isSearchPhraseValid)
        {
            olApi.get(`search.json?${ this.props.searchCategory }=${ this.props.searchPhrase }`).then((response) =>
            {
                this.props.setSearching(false);

                let list = response.data.docs;

                if (list.length)
                {
                    this.props.fetchBookList(list);
                }
                else
                {
                    this.props.setErrorMessage('Nothing found...');
                }
            }).catch(() =>
            {
                this.props.setSearching(false);
                this.props.setErrorMessage('Search failed!');
            });
        }
        else
        {
            this.props.setErrorMessage(' ');
        }
    };

    render()
    {
        return <Search searchPhrase={ this.props.searchPhrase } searchCategory={ this.props.searchCategory } onSubmit={ this.onSubmit } onSearchInputChange={ this.onSearchInputChange }
            onSearchCategoryDropdownMenuItemClick={ this.onSearchCategoryDropdownMenuItemClick } />;
    }
}

const mapStateToProps = (state) =>
{
    return { searchPhrase: state.bookSearch.searchPhrase, searchCategory: state.bookSearch.searchCategory };
};

const mapDispatchToProps = { setBookSearchPhrase, setBookSearchCategory, fetchBookList, clearBookList };

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);