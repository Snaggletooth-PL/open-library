import React from 'react';
import { olApi } from './Utils';
import '../styles/BookDetails.scss';

class BookDetails extends React.Component
{
    state = { book: {} };

    componentDidMount()
    {
        olApi.get(`${ this.props.match.params.key }/${ this.props.match.params.id }.json`).then((response) =>
        {
            this.setState({ book: response.data });
        });
    }

    render()
    {
        return (
            <div>

                <h2 className="font-weight-bold"><i className="fas fa-book"></i> Book details</h2>

                <div className="row m-5">

                    <div className="col-2">
                        <button type="button" className="btn"><i className="fas fa-arrow-left fa-lg align-middle"></i> <h4 className="d-inline align-middle font-weight-bold">Back</h4></button>
                    </div>

                    <div className="col-10">

                        <div className="row mb-4">

                            <div className="col-6">
                                <img src="/open-library/images/default_cover.png" className="img-responsive" alt="Book cover" />
                            </div>

                            <div className="col-6">

                                <h3 className="mb-3">{ this.state.book.title }</h3>

                                <p>Author: </p>
                                <p>Publisher: </p>
                                <p>Publish date: </p>
                                <p>Pages: </p>

                            </div>

                        </div>

                        <p className="book-description">{ this.state.book.description }</p>

                    </div>

                </div>

            </div>
        );
    }
}

export default BookDetails;