import React from 'react';
import { Link } from 'react-router-dom';
import { isValid } from '../utils';
import '../styles/NavList.scss';

function NavList(props)
{
    let pages = [];

    if (isValid(props.pages))
    {
        let pageMap = new Map(props.pages);

        for (let [pageKey, pageValue] of pageMap)
        {
            pages.push(<li key={ 'navItem(' + pageKey + ')' } className={ (pageKey === props.currentPage) ? 'current' : '' }><Link to={ pageKey }>{ pageValue }</Link></li>);
        }
    }

    return (
        <ul className="nav-list">
            { pages }
        </ul>
    );
}

export default NavList;