import React from 'react';
import { Link } from 'react-router-dom';
import { pagination } from '../utils';
import '../styles/Pagination.scss'

function Pagination(props)
{
    let paginationItems = [];

    for (let i = 0; i < props.numberOfPaginationItems; ++i)
    {
        let paginationItem = i + 1;

        paginationItems.push(
            <li key={ 'paginationItem' + i } className={ `page-item ${ (paginationItem === props.currentPaginationItem) ? 'active' : '' }` }>
                <Link className="page-link" to="#" onClick={ props.onPaginationItemClick }>{ paginationItem }</Link>
            </li>
        );
    }

    return (
        <nav className="align-self-center align-middle mx-auto mx-md-0 mb-3 mb-md-0 mr-md-3">
            <ul className="pagination pagination-sm m-0">
                <li className={ `page-item ${ (props.currentPaginationItem <= pagination.firstPage) ? 'disabled' : '' }` }>
                    <Link key='paginationItemPrev' className="page-link" to="#" onClick={ props.onPaginationItemClick }>{ pagination.previousPage }</Link>
                </li>
                { paginationItems }
                <li className={ `page-item ${ (props.currentPaginationItem >= paginationItems.length) ? 'disabled' : '' }` }>
                    <Link key='paginationItemNext' className="page-link" to="#" onClick={ props.onPaginationItemClick }>{ pagination.nextPage }</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;