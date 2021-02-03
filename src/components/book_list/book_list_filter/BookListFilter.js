import React from 'react';
import { Button, FormCheck, FormControl, InputGroup, Row } from 'react-bootstrap';
import { TagList } from '../../../components';

function BookListFilter(props)
{
    return (
        <div className="mx-auto">

            <Row className="mx-auto mb-3">
                <h5 className="m-0">Filters</h5>
            </Row>

            <Row className="mx-auto mb-3">
                <FormCheck className="mx-1 m-lg-0">
                    <FormCheck.Label>

                        <FormCheck.Input type="checkbox" checked={ props.onlyWithAuthorAvailable } onChange={ props.onOnlyWithAuthorAvailableCheckboxChange } />

                        <span>Show only books with known author</span>

                    </FormCheck.Label>
                </FormCheck>
                <FormCheck className="mx-1 m-lg-0">
                    <FormCheck.Label>

                        <FormCheck.Input type="checkbox" checked={ props.onlyWithCoverAvailable } onChange={ props.onlyWithCoverAvailableCheckboxChange } />

                        <span>Show only books with cover</span>

                    </FormCheck.Label>
                </FormCheck>
                <FormCheck className="mx-1 m-lg-0">
                    <FormCheck.Label>

                        <FormCheck.Input type="checkbox" checked={ props.onlyWithYearAvailable } onChange={ props.onlyWithYearAvailableCheckboxChange } />

                        <span>Show only books with known year</span>

                    </FormCheck.Label>
                </FormCheck>
            </Row>

            <div className="horizontal-divider"></div>

            <Row className="mx-auto mb-3">

                <label>Show only books with number of pages:</label>

                <InputGroup size="sm" className="mx-auto mb-2">

                    <InputGroup.Prepend>
                        <InputGroup.Text>from</InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl type="number" value={ props.minYear } onChange={ props.onMinYearInputChange } />

                    <InputGroup.Append className="input-group-prepend">
                        <InputGroup.Text>to</InputGroup.Text>
                    </InputGroup.Append>

                    <FormControl type="number" value={ props.maxYear } onChange={ props.onMaxYearInputChange } />

                </InputGroup>

                <Button type="button" variant="" size="sm" block onClick={ props.onYearRangeResetButtonClick }>Reset</Button>

            </Row>

            <div className="horizontal-divider"></div>

            <Row className="mx-auto mb-3">

                <label>Show only books with subjects:</label>

                <InputGroup size="sm" className="mb-1">

                    <FormControl type="text" onKeyUp={ props.onSubjectsInputKeyUp } />

                    <InputGroup.Append>
                        <InputGroup.Text><i className="fas fa-hashtag"></i></InputGroup.Text>
                    </InputGroup.Append>

                </InputGroup>

                { (props.subjects.length) ? <small className="mx-auto">Click on tag to remove</small> : null }

                <TagList tags={ props.subjects } onTagClick={ props.onSubjectTagClick } />

                { (props.subjects.length) ? <Button type="button" variant="" size="sm" block onClick={ props.onSubjectsClearButtonClick }>Clear</Button> : null }

            </Row>

        </div>
    );
}

export default BookListFilter;