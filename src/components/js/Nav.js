import React from 'react';
import { Link } from 'react-router-dom';
import { getPage } from './Utils';

class Nav extends React.Component {
    state = { links: [] };

    setCurrentPage = () => {
        let currentPage = getPage(window.location.href);

        for (let i = 0; i < this.state.links.length; ++i) {
            this.state.links[i].parentElement.classList.toggle('current', getPage(this.state.links[i].href) === currentPage);
        }
    }

    componentDidMount() {
        this.setState({ links: document.querySelectorAll('.navList > li > a') }, () => {
            this.setCurrentPage();
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between align-items-center p-0">

                <Link className="logotype" to="/"><h1>Open</h1><h1>Library</h1></Link>

                <button className="btn navButton" type="button" data-toggle="collapse" data-target="#navbarList" aria-expanded="false" aria-controls="navbarList">
                    <i className="fas fa-bars align-middle"></i><span className="d-none d-md-inline align-middle ml-2">Menu</span>
                </button>

                <div id="navbarList" className="collapse navbar-collapse">
                    <ul className="navList">
                        <li onClick={this.setCurrentPage}><Link to="/">Home</Link></li>
                        <li onClick={this.setCurrentPage}><Link to="/about">About</Link></li>
                        <li onClick={this.setCurrentPage}><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Nav;