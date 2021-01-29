import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { DropdownMenu } from '../components';
import { sortKey, sortOrder } from '../utils';

function BookListSort(props)
{
    return (
        <div className="mx-auto mx-md-0 mb-3 mb-lg-0">

            <Dropdown className="d-inline-block mr-2">

                <Dropdown.Toggle variant="">
                    <span>Sort by</span> <span className="font-weight-bold">{ props.sortKey }</span>
                </Dropdown.Toggle>

                <DropdownMenu isRight={ false } onDropdownMenuItemClick={ props.onSortKeyDropdownMenuItemClick } items={ Object.keys(sortKey) } />

            </Dropdown>

            <Link to="#" className="align-middle p-2" onClick={ props.onSortOrderLinkClick }>
                <i className={ (props.sortOrder === sortOrder.ascending) ? 'fas fa-sort-amount-up-alt fa-lg' : 'fas fa-sort-amount-down fa-lg' }></i>
            </Link>

        </div>
    );
}

export default BookListSort;