import React from 'react';
import { Search } from '../components';

class SearchContainer extends React.Component
{
    state = { searchPhrase: '', searchBy: 'title', searchByLabel: 'title' };

    onInputChange = (event) =>
    {
        this.setState({ searchPhrase: event.target.value });
    };

    onSearchByDropdownMenuItemClick = (event) =>
    {
        this.setState({ searchBy: event.target.textContent, searchByLabel: event.target.textContent });
    };

    onSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onSubmit(this.state.searchPhrase, this.state.searchBy);
    };

    render()
    {
        return <Search searchByLabel={ this.state.searchByLabel } onSubmit={ this.onSubmit } onInputChange={ this.onInputChange }
            onSearchByDropdownMenuItemClick={ this.onSearchByDropdownMenuItemClick } />;
    }
}

export default SearchContainer;