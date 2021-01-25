import React from 'react';
import { bookProperty, isValid, isUnsignedNumber } from '../utils';
import '../styles/Book.scss';

function Book(props)
{
    let cover = props.book[bookProperty.coverId];
    let title = props.book[bookProperty.title];
    let author = props.book[bookProperty.author];
    let year = props.book[bookProperty.year];

    return (
        <div className="book col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">

                <img src={ isUnsignedNumber(cover) ? 'https://covers.openlibrary.org/b/id/' + cover + '-M.jpg' : window.location.origin + '/open-library/images/default_cover.png' } className="card-img-top img-responsive" alt="Book cover" />

                <div className="card-body text-center p-2">

                    <h5 className="card-title font-weight-bold text-truncate">{ isValid(title) ? title : 'Untitled book' }</h5>

                    <p className="card-text mb-2">{ isValid(author) ? author.join(', ') : 'Unknown author' }</p>

                    <small className="card-text">{ isUnsignedNumber(year) ? year : 'Unknown year' }</small>

                </div>

            </div>
        </div>
    );
}

export default Book;