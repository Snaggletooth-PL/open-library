import React from 'react';
import { DropdownMenu } from '../components';

function Search(props)
{
    return (
        <form onSubmit={ props.onSubmit }>

            <h3 className="text-center mb-3">Search books</h3>

            <div className="input-group input-group-lg">

                <input type="text" className="form-control" placeholder="Search" onChange={ props.onInputChange } />

                <div className="input-group-append">

                    <div className="dropdown">

                        <button className="btn btn-block dropdown-toggle rounded-0 h-100 caret-off" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="d-none d-md-inline">Search by</span> <span className="font-weight-bold">{ props.searchByLabel }</span>
                        </button>

                        <DropdownMenu id={ props.searchByDropdownMenuId } isRight={ true } onItemClick={ props.onSearchByDropdownMenuItemClick } items={ ['title', 'author'] } />

                    </div>

                    <span className="input-group-text"><i className="fas fa-search fa-flip-horizontal"></i></span>

                </div>

            </div>

        </form>
    );
}

export default Search;