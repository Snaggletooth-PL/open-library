import * as ActionTypes from './actionTypes';

export const fetchBookList = (bookList) =>
({
    type: ActionTypes.FETCH_BOOK_LIST,
    bookList
});

export const clearBookList = () =>
({
    type: ActionTypes.CLEAR_BOOK_LIST
});

export const filterBookListByAuthorAvailability = (isFilterBookListByAuthorAvailabilityEnabled) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_AUTHOR_AVAILABILITY,
    isFilterBookListByAuthorAvailabilityEnabled
});

export const filterBookListByCoverAvailability = (isFilterBookListByCoverAvailabilityEnabled) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_COVER_AVAILABILITY,
    isFilterBookListByCoverAvailabilityEnabled
});

export const filterBookListByYearAvailability = (isFilterBookListByYearAvailabilityEnabled) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_YEAR_AVAILABILITY,
    isFilterBookListByYearAvailabilityEnabled
});

export const filterBookListByYearRange = (filterBookListByYearRangeMinYear, filterBookListByYearRangeMaxYear) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_YEAR_RANGE,
    filterBookListByYearRangeMinYear,
    filterBookListByYearRangeMaxYear
});

export const filterBookListBySubjects = (filterBookListBySubjectsTagList) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_SUBJECTS,
    filterBookListBySubjectsTagList
});