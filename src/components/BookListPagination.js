import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownMenu, Pagination } from '../components';
import { pagination } from '../utils';

function BookListPagination(props)
{
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between">

            <Pagination numberOfPaginationItems={ props.numberOfPaginationItems } currentPaginationItem={ props.currentPage } onPaginationItemClick={ props.onPageNumberPaginationItemClick } />

            <Dropdown className="d-inline-block mx-auto mr-md-0">

                <Dropdown.Toggle variant="">
                    <span>Show</span> <span className="font-weight-bold">{ props.pageSize }</span> <span>books on page</span>
                </Dropdown.Toggle>

                <DropdownMenu isRight={ true } onDropdownMenuItemClick={ props.onPageSizeDropdownMenuItemClick } items={ pagination.pageSizes } />

            </Dropdown>

        </div>
    );
}

export default BookListPagination;