import React from 'react';
import { Nav } from '../components';
import { getPage } from '../Utils';

class NavContainer extends React.Component
{
    state = { navListClassName: 'nav-list', links: [] };

    setCurrentPage = () =>
    {
        let currentPage = getPage(window.location.href);

        for (let i = 0; i < this.state.links.length; ++i)
        {
            this.state.links[i].parentElement.classList.toggle('current', getPage(this.state.links[i].href) === currentPage);
        }
    }

    componentDidMount()
    {
        this.setState({ links: document.querySelectorAll(`.${ this.state.navListClassName } > li > a`) }, () =>
        {
            this.setCurrentPage();
        });
    }

    render()
    {
        return <Nav navListClassName={ this.state.navListClassName } setCurrentPage={ this.setCurrentPage } />;
    }
}

export default NavContainer;