import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Nav } from '../components';
import '../styles/Header.scss';

function Header()
{
    return (
        <header>
            <Container>

                <div className="d-flex flex-column flex-sm-row justify-content-between mx-auto">

                    <div className="px-md-5 mx-auto welcome-text">
                        <p className="text-center p-1 m-0">Welcome to OpenLibrary</p>
                    </div>

                    <div className="px-md-5 mx-auto">
                        <div className="p-1 text-center">
                            <Link to="#"><i className="fab fa-facebook"></i></Link>
                            <Link to="#"><i className="fab fa-linkedin"></i></Link>
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fab fa-instagram"></i></Link>
                            <Link to="#"><i className="fab fa-pinterest"></i></Link>
                            <Link to="#"><i className="fab fa-tumblr"></i></Link>
                            <Link to="#"><i className="fab fa-youtube"></i></Link>
                            <Link to="#"><i className="fab fa-facebook-messenger"></i></Link>
                            <Link to="#"><i className="fab fa-skype"></i></Link>
                            <Link to="#"><i className="fab fa-discord"></i></Link>
                        </div>
                    </div>

                </div>

                <Nav />

            </Container>
        </header>
    );
}

export default Header;