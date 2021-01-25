import React from 'react';
import { Book, BookListFilterContainer, BookListPaginationContainer, BookListSortContainer } from '../components';
import { bookProperty } from '../utils';

function BookList(props)
{
    return (
        <div className="row mx-auto p-2">

            <div className="col-12 col-lg-3">
                <BookListFilterContainer />
            </div>

            <div className="col-12 col-lg-9">

                <div className="row flex-column flex-lg-row justify-content-between mx-auto w-100 mb-4">

                    <BookListSortContainer />

                    <BookListPaginationContainer currentNumberOfBooks={ props.currentNumberOfBooks } />

                </div>

                <div className="row justify-content-center mx-auto w-100">
                    { props.list.map(book => <Book key={ book[bookProperty.key] } book={ book } />) }
                </div>

            </div>

        </div>
    );
}

export default BookList;