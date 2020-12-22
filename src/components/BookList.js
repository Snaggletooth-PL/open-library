import React from 'react';
import Book from './Book';
import '../styles/BookList.scss';

function BookList(props)
{
    return (
        <div className="row justify-content-center mx-auto w-100 my-4">
            {props.list.map(book => <Book key={ book.key } book={ book } />) }
        </div>
    );
}

export default BookList;