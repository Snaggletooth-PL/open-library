import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../js/Nav';
import '../scss/Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">

                    <div className="d-flex flex-column flex-sm-row justify-content-between mx-auto">

                        <div className="px-md-5 mx-auto welcomeText">
                            <p className="text-center p-1 m-0">Welcome to OpenLibrary</p>
                        </div>

                        <div className="px-md-5 mx-auto">
                            <div className="p-1 text-center">
                                <Link to="#"><i class="fab fa-facebook"></i></Link>
                                <Link to="#"><i class="fab fa-linkedin"></i></Link>
                                <Link to="#"><i class="fab fa-twitter"></i></Link>
                                <Link to="#"><i class="fab fa-instagram"></i></Link>
                                <Link to="#"><i class="fab fa-pinterest"></i></Link>
                                <Link to="#"><i class="fab fa-tumblr"></i></Link>
                                <Link to="#"><i class="fab fa-youtube"></i></Link>
                                <Link to="#"><i class="fab fa-facebook-messenger"></i></Link>
                                <Link to="#"><i class="fab fa-skype"></i></Link>
                                <Link to="#"><i class="fab fa-discord"></i></Link>
                            </div>
                        </div>

                    </div>

                    <Nav />

                </div>
            </header>
        );
    }
}

export default Header;