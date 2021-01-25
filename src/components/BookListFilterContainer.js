import React from 'react';
import { connect } from 'react-redux';
import
{
    filterBookListByAuthorAvailability,
    filterBookListByCoverAvailability,
    filterBookListByYearAvailability,
    filterBookListByYearRange,
    filterBookListBySubjects,
    paginateBookListByCurrentPage
} from '../redux/actions';
import { BookListFilter } from '../components';
import { isValid, pagination } from '../utils';

class BookListFilterContainer extends React.Component
{
    onOnlyWithAuthorAvailableCheckboxChange = (event) =>
    {
        this.props.filterBookListByAuthorAvailability(event.currentTarget.checked);
        this.props.paginateBookListByCurrentPage(pagination.firstPage);
    }

    onlyWithCoverAvailableCheckboxChange = (event) =>
    {
        this.props.filterBookListByCoverAvailability(event.currentTarget.checked);
        this.props.paginateBookListByCurrentPage(pagination.firstPage);
    }

    onlyWithYearAvailableCheckboxChange = (event) =>
    {
        this.props.filterBookListByYearAvailability(event.currentTarget.checked);
        this.props.paginateBookListByCurrentPage(pagination.firstPage);
    }

    onMinYearInputChange = (event) =>
    {
        this.props.filterBookListByYearRange(event.currentTarget.value, this.props.bookListFilter.maxYear);
        this.props.paginateBookListByCurrentPage(pagination.firstPage);
    }

    onMaxYearInputChange = (event) =>
    {
        this.props.filterBookListByYearRange(this.props.bookListFilter.minYear, event.currentTarget.value);
        this.props.paginateBookListByCurrentPage(pagination.firstPage);
    }

    onYearRangeResetButtonClick = () =>
    {
        this.props.filterBookListByYearRange('', '');
        this.props.paginateBookListByCurrentPage(pagination.firstPage);
    }

    onSubjectsInputKeyUp = (event) =>
    {
        let value = event.currentTarget.value;

        if (event.keyCode === 13 && isValid(value))
        {
            event.preventDefault();
            this.props.filterBookListBySubjects(Array.from(new Set(this.props.bookListFilter.subjects).add(value)));
            this.props.paginateBookListByCurrentPage(pagination.firstPage);
            event.currentTarget.value = '';
        }
    }

    onSubjectTagClick = (event) =>
    {
        let subjects = new Set(this.props.bookListFilter.subjects);
        subjects.delete(event.currentTarget.textContent);
        this.props.filterBookListBySubjects(Array.from(subjects));
        this.props.paginateBookListByCurrentPage(pagination.firstPage);
    }

    onSubjectsClearButtonClick = () =>
    {
        this.props.filterBookListBySubjects([]);
        this.props.paginateBookListByCurrentPage(pagination.firstPage);
    }

    render()
    {
        return <BookListFilter onlyWithAuthorAvailable={ this.props.bookListFilter.onlyWithAuthorAvailable }
            onlyWithCoverAvailable={ this.props.bookListFilter.onlyWithCoverAvailable }
            onlyWithYearAvailable={ this.props.bookListFilter.onlyWithYearAvailable }
            onOnlyWithAuthorAvailableCheckboxChange={ this.onOnlyWithAuthorAvailableCheckboxChange }
            onlyWithCoverAvailableCheckboxChange={ this.onlyWithCoverAvailableCheckboxChange }
            onlyWithYearAvailableCheckboxChange={ this.onlyWithYearAvailableCheckboxChange }
            minYear={ this.props.bookListFilter.minYear }
            maxYear={ this.props.bookListFilter.maxYear }
            onMinYearInputChange={ this.onMinYearInputChange }
            onMaxYearInputChange={ this.onMaxYearInputChange }
            onYearRangeResetButtonClick={ this.onYearRangeResetButtonClick }
            subjects={ this.props.bookListFilter.subjects }
            onSubjectsInputKeyUp={ this.onSubjectsInputKeyUp }
            onSubjectTagClick={ this.onSubjectTagClick }
            onSubjectsClearButtonClick={ this.onSubjectsClearButtonClick } />;
    }
}

const mapStateToProps = (state) =>
{
    return { bookListFilter: state.bookListFilter };
};

const mapDispatchToProps =
{
    filterBookListByAuthorAvailability,
    filterBookListByCoverAvailability,
    filterBookListByYearAvailability,
    filterBookListByYearRange,
    filterBookListBySubjects,
    paginateBookListByCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListFilterContainer);