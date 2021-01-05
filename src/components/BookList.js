import React from 'react';
import { Book } from '../components';
import '../styles/BookList.scss';

function BookList(props)
{
    return (
        <div className="m-4 p-2">
            <div className="row justify-content-center mx-auto w-100">
                { props.list.map(book => <Book key={ book.key } book={ book } />) }
            </div>
        </div>
    );
}

export default BookList;