import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props)
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-between align-items-center p-0">

            <Link className="logotype" to="#"><h1>Open</h1><h1>Library</h1></Link>

            <button className="btn nav-button" type="button" data-toggle="collapse" data-target="#navbarList" aria-expanded="false" aria-controls="navbarList">
                <i className="fas fa-bars align-middle"></i><span className="d-none d-md-inline align-middle ml-2">Menu</span>
            </button>

            <div id="navbarList" className="collapse navbar-collapse">
                <ul className={ props.navListClassName }>
                    <li onClick={ props.setCurrentPage }><Link to="/">Home</Link></li>
                    <li onClick={ props.setCurrentPage }><Link to="/about">About</Link></li>
                    <li onClick={ props.setCurrentPage }><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

        </nav>
    );
}

export default Nav;