import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import { isNumber, pagination } from '../utils';
import '../styles/Pagination.scss'

function Pagination(props)
{
    let paginationItems = [];
    let numberOfPaginationItems = isNumber(props.numberOfPaginationItems) ? props.numberOfPaginationItems : 0;

    for (let i = 0; i < numberOfPaginationItems; ++i)
    {
        let paginationItem = i + 1;

        paginationItems.push(
            <BootstrapPagination.Item key={ 'paginationItem' + i } className={ (paginationItem === props.currentPaginationItem) ? 'active' : '' } href="#"
                onClick={ props.onPaginationItemClick }>
                { paginationItem }
            </BootstrapPagination.Item>
        );
    }

    return (
        <nav className="align-self-center align-middle mx-auto mx-md-0 mb-3 mb-md-0 mr-md-3">
            <BootstrapPagination size="sm" className="m-0">
                <BootstrapPagination.Item key='paginationItemPrev' className={ (props.currentPaginationItem <= pagination.firstPage) ? 'disabled' : '' } href="#"
                    onClick={ props.onPaginationItemClick }>{ pagination.previousPage }</BootstrapPagination.Item>
                { paginationItems }
                <BootstrapPagination.Item key='paginationItemNext' className={ (props.currentPaginationItem >= paginationItems.length) ? 'disabled' : '' } href="#"
                    onClick={ props.onPaginationItemClick }>{ pagination.nextPage }</BootstrapPagination.Item>
            </BootstrapPagination>
        </nav>
    );
}

export default Pagination;