import React from 'react';
import { TagList } from '../components';

function BookListFilter(props)
{
    return (
        <div className="mx-auto">

            <div className="row mx-auto mb-3">
                <h5 className="m-0">Filters</h5>
            </div>

            <div className="row mx-auto mb-3">

                <div className="form-check mx-1 m-lg-0">

                    <input id="filterBookListByAuthorAvailabilityCheckbox" type="checkbox" className="form-check-input" checked={ props.onlyWithAuthorAvailable }
                        onChange={ props.onOnlyWithAuthorAvailableCheckboxChange } />

                    <label className="form-check-label" htmlFor="filterBookListByAuthorAvailabilityCheckbox">Show only books with known author</label>

                </div>

                <div className="form-check mx-1 m-lg-0">

                    <input id="filterBookListByCoverAvailabilityCheckbox" type="checkbox" className="form-check-input" checked={ props.onlyWithCoverAvailable }
                        onChange={ props.onlyWithCoverAvailableCheckboxChange } />

                    <label className="form-check-label" htmlFor="filterBookListByCoverAvailabilityCheckbox">Show only books with cover</label>

                </div>

                <div className="form-check mx-1 m-lg-0">

                    <input id="filterBookListByYearAvailabilityCheckbox" type="checkbox" className="form-check-input" checked={ props.onlyWithYearAvailable }
                        onChange={ props.onlyWithYearAvailableCheckboxChange } />

                    <label className="form-check-label" htmlFor="filterBookListByYearAvailabilityCheckbox">Show only books with known year</label>

                </div>

            </div>

            <div className="horizontal-divider"></div>

            <div className="row mx-auto mb-3">

                <label>Show only books with number of pages:</label>

                <div className="input-group input-group-sm mx-auto mb-2">

                    <div className="input-group-prepend">
                        <span className="input-group-text">from</span>
                    </div>

                    <input type="number" className="form-control" value={ props.minYear } onChange={ props.onMinYearInputChange } />

                    <div className="input-group-prepend input-group-append">
                        <span className="input-group-text">to</span>
                    </div>

                    <input type="number" className="form-control" value={ props.maxYear } onChange={ props.onMaxYearInputChange } />

                </div>

                <button type="button" className="btn btn-sm btn-block" onClick={ props.onYearRangeResetButtonClick }>Reset</button>

            </div>

            <div className="horizontal-divider"></div>

            <div className="row mx-auto mb-3">

                <label>Show only books with subjects:</label>

                <div className="input-group input-group-sm mb-1">

                    <input type="text" className="form-control" onKeyUp={ props.onSubjectsInputKeyUp } />

                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-hashtag"></i></span>
                    </div>

                </div>

                { (props.subjects.length) ? <small className="mx-auto">Click on tag to remove</small> : null }

                <TagList tags={ props.subjects } onTagClick={ props.onSubjectTagClick } />

                { (props.subjects.length) ? <button type="button" className="btn btn-sm btn-block" onClick={ props.onSubjectsClearButtonClick }>Clear</button> : null }

            </div>

        </div>
    );
}

export default BookListFilter;