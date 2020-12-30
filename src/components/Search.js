import React from 'react';
import { DropdownMenu } from '../components';
import { setActive } from '../Utils';

class Search extends React.Component
{
    state = { searchPhrase: '', searchBy: 'title', searchByLabel: '', dropdownItems: [] };

    setSearchByLabel()
    {
        this.setState({ searchByLabel: this.state.searchBy });
    }

    setDropdownItemActive()
    {
        for (let i = 0; i < this.state.dropdownItems.length; ++i)
        {
            let dropdownItem = this.state.dropdownItems[i];
            setActive(dropdownItem, dropdownItem.textContent === this.state.searchBy);
        }
    }

    onInputChange = (event) =>
    {
        this.setState({ searchPhrase: event.target.value });
    }

    onDropdownItemClick = (event) =>
    {
        this.setState({ searchBy: event.target.textContent }, () =>
        {
            this.setSearchByLabel();
            this.setDropdownItemActive();
        });
    }

    onSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onSubmit(this.state.searchPhrase, this.state.searchBy);
    }

    componentDidMount()
    {
        this.setState({ searchByLabel: document.querySelector('#searchByLabel'), dropdownItems: document.querySelectorAll('#searchByDropdownMenu > a.dropdown-item') }, () =>
        {
            this.setSearchByLabel();
            this.setDropdownItemActive();
        });
    }

    render()
    {
        return (
            <form onSubmit={ this.onSubmit }>

                <h3 className="text-center mb-3">Search books</h3>

                <div className="input-group input-group-lg">

                    <input type="text" className="form-control" placeholder="Search" onChange={ this.onInputChange } />

                    <div className="input-group-append">

                        <div className="dropdown">

                            <button className="btn btn-block dropdown-toggle rounded-0 h-100 caret-off" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Search by <span className="font-weight-bold">{ this.state.searchByLabel }</span>
                            </button>

                            <DropdownMenu id='searchByDropdownMenu' isRight={ true } onItemClick={ this.onDropdownItemClick } items={ ['title', 'author'] } />

                        </div>

                        <span className="input-group-text"><i className="fas fa-search fa-flip-horizontal"></i></span>

                    </div>

                </div>

            </form>
        );
    }
}

export default Search;