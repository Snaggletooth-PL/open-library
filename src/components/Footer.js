import React from 'react';
import '../styles/Footer.scss';

function Footer()
{
    return (
        <footer>
            <div className="container">

                <div className="row p-3">

                    <div className="col-12 col-md-4">

                        <h5 className="font-weight-bold">OpenLibrary</h5>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec egestas nisl. Fusce vel vehicula libero, et placerat neque.
                            Pellentesque luctus cursus volutpat. Morbi finibus lacus eros, eu gravida metus iaculis ac.
                        </p>

                    </div>

                    <div className="col-12 col-md-4">

                        <h5 className="font-weight-bold">Subjects</h5>

                    </div>

                    <div className="col-12 col-md-4">

                        <h5 className="font-weight-bold">Contact details</h5>

                        <div className="row">

                            <div className="col-3">
                                <p className="font-weight-bold">Address:</p>
                            </div>

                            <div className="col-9">
                                <p>69 Abbey Rd, London, United Kingdom</p>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-3">
                                <p className="font-weight-bold">Phone:</p>
                            </div>

                            <div className="col-9">
                                <p>+44 1632 960948</p>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-3">
                                <p className="font-weight-bold">E-mail:</p>
                            </div>

                            <div className="col-9">
                                <p>openlibrary@ol.com</p>
                            </div>

                        </div>

                    </div>

                </div>

                <p className="copyrightText">Copyright &copy; 2020 Konrad Rembowski</p>

            </div>
        </footer>
    );
}

export default Footer;