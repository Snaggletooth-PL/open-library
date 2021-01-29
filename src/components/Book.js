import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { bookProperty, coverSize, isValid, isUnsignedNumber, getCoverUrl } from '../utils';
import '../styles/Book.scss';

function Book(props)
{
    let coverId = props.book[bookProperty.coverId];
    let title = props.book[bookProperty.title];
    let author = props.book[bookProperty.author];
    let year = props.book[bookProperty.year];
    let locationState = {};
    locationState[bookProperty.coverId] = coverId;
    locationState[bookProperty.author] = author;
    locationState[bookProperty.year] = year;
    locationState[bookProperty.publishers] = props.book[bookProperty.publishers];

    return (
        <Col xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } className="book mb-4">
            <Link to={ { pathname: `/book${ props.book[bookProperty.key] }`, state: locationState } }>
                <Card>

                    <Card.Img src={ getCoverUrl(coverId, coverSize.medium) } variant="top" className="img-responsive" alt="Book cover" />

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