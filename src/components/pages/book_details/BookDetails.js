import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { PageHeader, TabList, TagList } from '../../../components';
import { bookProperty, coverSize, isValid, isUnsignedNumber, isObject, getCoverUrl } from '../../../utils';
import '../../../styles/BookDetails.scss';

function BookDetails(props)
{
    let title = props.book[bookProperty.title];
    let coverId = props.book[bookProperty.coverId];
    let author = props.book[bookProperty.author];
    let year = props.book[bookProperty.year];
    let publisher = props.book[bookProperty.publishers];
    let links = props.book[bookProperty.links];
    let description = props.book[bookProperty.description];
    let subjects = props.book[bookProperty.subjects];
    let linkList = [];

    if (isValid(links))
    {
        for (let i = 0; i < links.length; ++i)
        {
            linkList.push(<li key={ 'link' + i }><a target="_blank" rel="noreferrer" href={ links[i].url }><strong>{ links[i].title }</strong></a></li>);
        }
    }

    let tabs = [[bookProperty.description, <p>{ isValid(description) ? (isObject(description) ? description.value : description) : 'None' }</p>],
    [bookProperty.subjects, (isValid(subjects) && subjects.length) ? <TagList tags={ subjects } onTagClick={ (event) => { event.preventDefault(); } } /> : <p>None</p>]];

    return (
        <div>

            <PageHeader iconClassName="fas fa-book" headerName={ isValid(title) ? title : 'Untitled book' } />

            <Row className="mx-auto p-2">

                <Col xs={ 12 } lg={ 2 } className="mb-3 mb-lg-0">
                    <Link to="/" className="align-middle"><i className="fas fa-arrow-left fa-lg"></i><h3 className="d-inline ml-2 mb-0">Back</h3></Link>
                </Col>

                <Col xs={ 12 } lg={ 10 }>

                    <Row className="mb-4">

                        <Col xs={ 12 } md={ 4 } className="mb-4 mb-md-0">
                            <img src={ getCoverUrl(coverId, coverSize.large) } className="cover" alt="Book cover" />
                        </Col>

                        <Col xs={ 12 } md={ 8 }>

                            <p className="h5"><span className="mr-3">Author(s):</span><strong>{ isValid(author) ? author.join(', ') : 'Unknown' }</strong></p>
                            <p className="h5"><span className="mr-3">Year:</span><strong>{ isUnsignedNumber(year) ? year : 'Unknown' }</strong></p>
                            <p className="h5"><span className="mr-3">Publisher(s):</span><strong>{ isValid(publisher) ? publisher.join(', ') : 'Unknown' }</strong></p>
                            { (linkList.length) ? <p className="h5"><span className="mr-3">Links:</span></p> : null }

                            <ul className="links">
                                { linkList }
                            </ul>

                        </Col>

                    </Row>

                    <TabList tabs={ tabs } />

                </Col>

            </Row>

        </div>
    );
}

export default BookDetails;