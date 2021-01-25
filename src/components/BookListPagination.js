import React from 'react';
import { DropdownMenu, Pagination } from '../components';
import { pagination } from '../utils';

function BookListPagination(props)
{
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between">

            <Pagination numberOfPaginationItems={ props.numberOfPaginationItems } currentPaginationItem={ props.currentPage }
                onPaginationItemClick={ props.onPageNumberPaginationItemClick } />

            <div className="dropdown d-inline-block mx-auto mr-md-0">

                <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>Show</span> <span className="font-weight-bold">{ props.pageSize }</span> <span>books on page</span>
                </button>

                <DropdownMenu isRight={ true } onDropdownMenuItemClick={ props.onPageSizeDropdownMenuItemClick } items={ pagination.pageSizes } />

            </div>

        </div>
    );
}

export default BookListPagination;