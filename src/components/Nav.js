import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavList } from '../components';
import '../styles/Nav.scss';

function Nav()
{
    return (
        <Navbar variant="dark" expand="lg" className="justify-content-between align-items-center p-0">

            <Link className="logotype" to="/"><h1>Open</h1><h1>Library</h1></Link>

            <Navbar.Toggle id="navbar-toggle" aria-controls="navbarList">
                <i className="fas fa-bars align-middle"></i><span className="d-none d-md-inline align-middle ml-2">Menu</span>
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarList">
                <NavList pages={ [['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact']] } currentPage={ useLocation().pathname } />
            </Navbar.Collapse>

        </Navbar>
    );
}

export default Nav;