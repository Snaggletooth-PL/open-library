import React from 'react';
import { Search } from '../components';
import { setActive } from '../Utils';

class SearchContainer extends React.Component
{
    state = { searchPhrase: '', searchBy: 'title', searchByLabel: '', searchByDropdownMenuId: 'searchByDropdownMenu', searchByDropdownMenuItems: [] };

    setSearchByLabel()
    {
        this.setState({ searchByLabel: this.state.searchBy });
    }

    setSearchByDropdownMenuItemActive()
    {
        for (let i = 0; i < this.state.searchByDropdownMenuItems.length; ++i)
        {
            let dropdownItem = this.state.searchByDropdownMenuItems[i];
            setActive(dropdownItem, dropdownItem.textContent === this.state.searchBy);
        }
    }

    onInputChange = (event) =>
    {
        this.setState({ searchPhrase: event.target.value });
    };

    onSearchByDropdownMenuItemClick = (event) =>
    {
        this.setState({ searchBy: event.target.textContent }, () =>
        {
            this.setSearchByLabel();
            this.setSearchByDropdownMenuItemActive();
        });
    };

    onSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onSubmit(this.state.searchPhrase, this.state.searchBy);
    };

    componentDidMount()
    {
        this.setState({ searchByDropdownMenuItems: document.querySelectorAll(`#${ this.state.searchByDropdownMenuId } > a.dropdown-item`) }, () =>
        {
            this.setSearchByLabel();
            this.setSearchByDropdownMenuItemActive();
        });
    }

    render()
    {
        return <Search searchByLabel={ this.state.searchByLabel } searchByDropdownMenuId={ this.state.searchByDropdownMenuId } onSubmit={ this.onSubmit } onInputChange={ this.onInputChange } onSearchByDropdownMenuItemClick={ this.onSearchByDropdownMenuItemClick } />;
    }
}

export default SearchContainer;