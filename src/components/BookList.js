import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Book, BookListFilterContainer, BookListSortContainer, BookListPaginationContainer } from '../components';
import { bookProperty } from '../utils';

function BookList(props)
{
    return (
        <Row className="mx-auto p-2">

            <Col xs={ 12 } lg={ 3 }>
                <BookListFilterContainer />
            </Col>

            <Col xs={ 12 } lg={ 9 }>

                <Row className="flex-column flex-lg-row justify-content-between mx-auto w-100 mb-4">

                    <BookListSortContainer />

                    <BookListPaginationContainer currentNumberOfBooks={ props.currentNumberOfBooks } />

                </Row>

                <Row className="justify-content-center mx-auto w-100">
                    { props.list.map(book => <Book key={ book[bookProperty.key] } book={ book } />) }
                </Row>

            </Col>

        </Row>
    );
}

export default BookList;