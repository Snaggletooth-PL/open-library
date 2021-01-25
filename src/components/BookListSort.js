import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu } from '../components';
import { sortKey, sortOrder } from '../utils';

function BookListSort(props)
{
    return (
        <div className="mx-auto mx-md-0 mb-3 mb-lg-0">

            <div className="dropdown d-inline-block mr-2">

                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>Sort by</span> <span className="font-weight-bold">{ props.sortKey }</span>
                </button>

                <DropdownMenu isRight={ false } onDropdownMenuItemClick={ props.onSortKeyDropdownMenuItemClick } items={ Object.keys(sortKey) } />

            </div>

            <Link to="#" className="text-reset text-decoration-none align-middle p-2" onClick={ props.onSortOrderLinkClick }>
                <i className={ (props.sortOrder === sortOrder.ascending) ? 'fas fa-sort-amount-up-alt fa-lg' : 'fas fa-sort-amount-down fa-lg' }></i>
            </Link>

        </div>
    );
}

export default BookListSort;