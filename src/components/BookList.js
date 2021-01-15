import React from 'react';
import { Book, BookListFiltersContainer } from '../components';
import '../styles/BookList.scss';

function BookList(props)
{
    return (
        <div className="row mx-auto p-2">

            <div className="col-12 col-lg-3">
                <BookListFiltersContainer />
            </div>

            <div className="col-12 col-lg-9">
                <div className="row justify-content-center mx-auto w-100">
                    { props.list.map(book => <Book key={ book.key } book={ book } />) }
                </div>
            </div>

        </div>
    );
}

export default BookList;