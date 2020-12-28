import React from 'react';
import { Link } from 'react-router-dom';
import { setActive } from './Utils';

class Search extends React.Component
{
    state = { searchPhrase: '', searchBy: 'title', dropdownItems: [] };

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
        this.setState({ dropdownItems: document.querySelectorAll('a.dropdown-item') }, () =>
        {
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

                            <button className="btn btn-block dropdown-toggle h-100" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Search by
                            </button>

                            <div className="dropdown-menu dropdown-menu-right text-right">
                                <Link className="dropdown-item" to="#" onClick={ this.onDropdownItemClick }>title</Link>
                                <Link className="dropdown-item" to="#" onClick={ this.onDropdownItemClick }>author</Link>
                            </div>

                        </div>

                        <span className="input-group-text"><i className="fas fa-search fa-flip-horizontal"></i></span>

                    </div>

                </div>

            </form>
        );
    }
}

export default Search;