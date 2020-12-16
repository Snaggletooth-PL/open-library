import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between align-items-center p-0">

                <div><Link className="logotype" to="#"><h1>Open</h1><h1>Library</h1></Link></div>

                <button className="btn navButton" type="button" data-toggle="collapse" data-target="#navbarList" aria-expanded="false" aria-controls="navbarList">
                    <i class="fas fa-bars align-middle"></i><span class="d-none d-md-inline align-middle ml-2">Menu</span>
                </button>

                <div id="navbarList" className="collapse navbar-collapse">
                    <ul className="navList">
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Nav;