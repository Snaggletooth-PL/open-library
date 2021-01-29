import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../styles/Footer.scss';

function Footer()
{
    return (
        <footer>
            <Container>

                <Row className="p-3">

                    <Col xs={ 12 } md={ 8 }>

                        <h5 className="font-weight-bold">OpenLibrary</h5>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget ullamcorper purus. Suspendisse sed lectus et libero semper mollis.
                            Curabitur porttitor sapien turpis, nec semper arcu efficitur sodales. Nulla facilisi. Aenean ut fringilla quam.
                            Quisque risus lacus, varius id lectus at, interdum tristique diam. Suspendisse vel libero ex. Maecenas ut faucibus nunc.
                            Nullam volutpat interdum neque ac elementum. Suspendisse in quam imperdiet, efficitur dolor at, gravida massa.
                            Phasellus lobortis maximus quam, ac sodales urna ornare auctor. Pellentesque a dui vel nunc fermentum interdum.
                        </p>

                    </Col>

                    <Col xs={ 12 } md={ 4 }>

                        <h5 className="font-weight-bold">Contact details</h5>

                        <Row>

                            <Col xs={ 2 }>
                                <p className="font-weight-bold">Address:</p>
                            </Col>

                            <Col xs={ 10 }>
                                <p>69 Abbey Rd, London, United Kingdom</p>
                            </Col>

                        </Row>

                        <Row>

                            <Col xs={ 2 }>
                                <p className="font-weight-bold">Phone:</p>
                            </Col>

                            <Col xs={ 10 }>
                                <p>+44 1632 960948</p>
                            </Col>

                        </Row>

                        <Row>

                            <Col xs={ 2 }>
                                <p className="font-weight-bold">E-mail:</p>
                            </Col>

                            <Col xs={ 10 }>
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