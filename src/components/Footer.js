import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../styles/Footer.scss';

function Footer()
{
    return (
        <footer>
            <Container>

                <Row className="p-3">

                    <Col xs={ 12 } md={ 4 }>

                        <h5 className="font-weight-bold">OpenLibrary</h5>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec egestas nisl. Fusce vel vehicula libero, et placerat neque.
                            Pellentesque luctus cursus volutpat. Morbi finibus lacus eros, eu gravida metus iaculis ac.
                        </p>

                    </Col>

                    <Col xs={ 12 } md={ 4 }>

                        <h5 className="font-weight-bold">Subjects</h5>

                    </Col>

                    <Col xs={ 12 } md={ 4 }>

                        <h5 className="font-weight-bold">Contact details</h5>

                        <Row>

                            <Col xs={ 3 }>
                                <p className="font-weight-bold">Address:</p>
                            </Col>

                            <Col xs={ 9 }>
                                <p>69 Abbey Rd, London, United Kingdom</p>
                            </Col>

                        </Row>

                        <Row>

                            <Col xs={ 3 }>
                                <p className="font-weight-bold">Phone:</p>
                            </Col>

                            <Col xs={ 9 }>
                                <p>+44 1632 960948</p>
                            </Col>

                        </Row>

                        <Row>

                            <Col xs={ 3 }>
                                <p className="font-weight-bold">E-mail:</p>
                            </Col>

                            <Col xs={ 9 }>
                                <p>openlibrary@ol.com</p>
                            </Col>

                        </Row>

                    </Col>

                </Row>

                <p className="copyright-text">Copyright &copy; 2020 Konrad Rembowski</p>

            </Container>
        </footer>
    );
}

export default Footer;