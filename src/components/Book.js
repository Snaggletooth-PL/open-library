import React from 'react';
import { Link } from 'react-router-dom';
import { isValid, isUnsignedNumber } from './Utils';

function Book(props)
{
    let cover = props.book.cover_i;
    let title = props.book.title;
    let author = props.book.author_name;
    let publish_year = props.book.first_publish_year;

    return (
        <div className="book col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center">
            <Link to={ `/book${ props.book.key }` }>
                <div className="card h-100">

                    <img src={ isUnsignedNumber(cover) ? 'https://covers.openlibrary.org/b/id/' + cover + '-M.jpg' : window.location.origin + '/open-library/images/default_cover.png' }
                        className="card-img-top img-responsive" alt="Book cover" />

                    <div className="card-body">

                        <h5 className="card-title font-weight-bold text-truncate">{ isValid(title) ? title : 'Untitled book' }</h5>

                        <p>{ isValid(author) ? author : 'Unknown author' }</p>
                        <p><small>{ isUnsignedNumber(publish_year) ? publish_year : 'Unknown year' }</small></p>

                    </div>

                </div>
            </Link>
        </div>
    );
}

export default Book;