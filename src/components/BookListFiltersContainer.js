import React from 'react';
import { connect } from 'react-redux';
import
{
    filterBookListByAuthorAvailability,
    filterBookListByCoverAvailability,
    filterBookListByYearAvailability,
    filterBookListByYearRange,
    filterBookListBySubjects
} from '../redux/actions';
import { BookListFilters } from '../components';

class BookListFiltersContainer extends React.Component
{
    onFilterBookListByAuthorAvailabilityCheckboxChange = (event) =>
    {
        this.props.filterBookListByAuthorAvailability(event.currentTarget.checked);
    }

    onFilterBookListByCoverAvailabilityCheckboxChange = (event) =>
    {
        this.props.filterBookListByCoverAvailability(event.currentTarget.checked);
    }

    onFilterBookListByYearAvailabilityCheckboxChange = (event) =>
    {
        this.props.filterBookListByYearAvailability(event.currentTarget.checked);
    }

    onFilterBookListByYearRangeMinYearInputChange = (event) =>
    {
        this.props.filterBookListByYearRange(event.currentTarget.value, this.props.bookListFilters.filterBookListByYearRangeMaxYear);
    }

    onFilterBookListByYearRangeMaxYearInputChange = (event) =>
    {
        this.props.filterBookListByYearRange(this.props.bookListFilters.filterBookListByYearRangeMinYear, event.currentTarget.value);
    }

    onFilterBookListByYearRangeResetButtonClick = () =>
    {
        this.props.filterBookListByYearRange('', '');
    }

    onFilterBookListBySubjectsInputKeyUp = (event) =>
    {
        if (event.keyCode === 13)
        {
            event.preventDefault();
            this.props.filterBookListBySubjects(Array.from(new Set(this.props.bookListFilters.filterBookListBySubjectsTagList).add(event.currentTarget.value)));
            event.currentTarget.value = '';
        }
    }

    onFilterBookListBySubjectsTagClick = (event) =>
    {
        let tagList = new Set(this.props.bookListFilters.filterBookListBySubjectsTagList);
        tagList.delete(event.currentTarget.textContent);
        this.props.filterBookListBySubjects(Array.from(tagList));
    }

    onFilterBookListBySubjectsClearButtonClick = () =>
    {
        this.props.filterBookListBySubjects([]);
    }

    render()
    {
        return <BookListFilters isFilterBookListByAuthorAvailabilityEnabled={ this.props.bookListFilters.isFilterBookListByAuthorAvailabilityEnabled }
            isFilterBookListByCoverAvailabilityEnabled={ this.props.bookListFilters.isFilterBookListByCoverAvailabilityEnabled }
            isFilterBookListByYearAvailabilityEnabled={ this.props.bookListFilters.isFilterBookListByYearAvailabilityEnabled }
            onFilterBookListByAuthorAvailabilityCheckboxChange={ this.onFilterBookListByAuthorAvailabilityCheckboxChange }
            onFilterBookListByCoverAvailabilityCheckboxChange={ this.onFilterBookListByCoverAvailabilityCheckboxChange }
            onFilterBookListByYearAvailabilityCheckboxChange={ this.onFilterBookListByYearAvailabilityCheckboxChange }
            filterBookListByYearRangeMinYear={ this.props.bookListFilters.filterBookListByYearRangeMinYear }
            filterBookListByYearRangeMaxYear={ this.props.bookListFilters.filterBookListByYearRangeMaxYear }
            onFilterBookListByYearRangeMinYearInputChange={ this.onFilterBookListByYearRangeMinYearInputChange }
            onFilterBookListByYearRangeMaxYearInputChange={ this.onFilterBookListByYearRangeMaxYearInputChange }
            onFilterBookListByYearRangeResetButtonClick={ this.onFilterBookListByYearRangeResetButtonClick }
            filterBookListBySubjectsTagList={ this.props.bookListFilters.filterBookListBySubjectsTagList }
            onFilterBookListBySubjectsInputKeyUp={ this.onFilterBookListBySubjectsInputKeyUp }
            onFilterBookListBySubjectsTagClick={ this.onFilterBookListBySubjectsTagClick }
            onFilterBookListBySubjectsClearButtonClick={ this.onFilterBookListBySubjectsClearButtonClick } />;
    }
}

const mapStateToProps = (state) =>
{
    return { bookListFilters: state.bookListFilters };
};

const mapDispatchToProps =
{
    filterBookListByAuthorAvailability,
    filterBookListByCoverAvailability,
    filterBookListByYearAvailability,
    filterBookListByYearRange,
    filterBookListBySubjects
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListFiltersContainer);