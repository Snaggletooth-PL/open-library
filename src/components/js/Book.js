import React from 'react';
import { isValid, isUnsignedNumber } from './Utils';

class Book extends React.Component {
    render() {
        let cover = this.props.book.cover_i;
        let title = this.props.book.title;
        let author = this.props.book.author_name;
        let publish_year = this.props.book.first_publish_year;

        return (
            <div className="book col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center">
                <div className="card h-100">

                    <img src={isUnsignedNumber(cover) ? 'http://covers.openlibrary.org/b/id/' + cover + '-M.jpg' : window.location.pathname + '/images/default_cover.png'}
                        className="card-img-top img-responsive" alt="Book cover" />

                    <div className="card-body">

                        <h5 className="card-title font-weight-bold text-truncate">{isValid(title) ? title : 'Untitled book'}</h5>

                        <p>{isValid(author) ? author : 'Unknown author'}</p>
                        <p><small>{isUnsignedNumber(publish_year) ? publish_year : 'Unknown year'}</small></p>

                    </div>

                </div>
            </div>
        );
    }
}

export default Book;