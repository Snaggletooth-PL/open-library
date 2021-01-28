import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { bookProperty, isValid, isUnsignedNumber } from '../utils';
import '../styles/Book.scss';

function Book(props)
{
    let cover = props.book[bookProperty.coverId];
    let title = props.book[bookProperty.title];
    let author = props.book[bookProperty.author];
    let year = props.book[bookProperty.year];
    let locationState = {};
    locationState[bookProperty.coverId] = cover;
    locationState[bookProperty.author] = author;
    locationState[bookProperty.year] = year;

    return (
        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } className="book mb-4">
            <Link to={ { pathname: `/book${ props.book[bookProperty.key] }`, state: locationState } }>
                <Card>

                    <Card.Img src={ isUnsignedNumber(cover) ? 'https://covers.openlibrary.org/b/id/' + cover + '-M.jpg' : window.location.origin + '/open-library/images/default_cover.png' } variant="top" className="img-responsive" alt="Book cover" />

                    <Card.Body className="text-center p-2">

                        <Card.Title as="h5" className="font-weight-bold text-truncate">{ isValid(title) ? title : 'Untitled book' }</Card.Title>

                        <Card.Text className="mb-2">{ isValid(author) ? author.join(', ') : 'Unknown author' }</Card.Text>

                        <Card.Text as="small">{ isUnsignedNumber(year) ? year : 'Unknown year' }</Card.Text>

                    </Card.Body>

                </Card>
            </Link>
        </Col>
    );
}

export default Book;