import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavList } from '../components';

function Nav()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-between align-items-center p-0">

            <Link className="logotype" to="/"><h1>Open</h1><h1>Library</h1></Link>

            <button className="btn nav-button" type="button" data-toggle="collapse" data-target="#navbarList" aria-expanded="false" aria-controls="navbarList">
                <i className="fas fa-bars align-middle"></i><span className="d-none d-md-inline align-middle ml-2">Menu</span>
            </button>

            <div id="navbarList" className="collapse navbar-collapse">
                <NavList pages={ [['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact']] } currentPage={ useLocation().pathname } />
            </div>

        </nav>
    );
}

export default Nav;