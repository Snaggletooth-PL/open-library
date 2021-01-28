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

export const filterBookListByAuthorAvailability = (onlyWithAuthorAvailable) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_AUTHOR_AVAILABILITY,
    onlyWithAuthorAvailable
});

export const filterBookListByCoverAvailability = (onlyWithCoverAvailable) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_COVER_AVAILABILITY,
    onlyWithCoverAvailable
});

export const filterBookListByYearAvailability = (onlyWithYearAvailable) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_YEAR_AVAILABILITY,
    onlyWithYearAvailable
});

export const filterBookListByYearRange = (minYear, maxYear) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_YEAR_RANGE,
    minYear,
    maxYear
});

export const filterBookListBySubjects = (subjects) =>
({
    type: ActionTypes.FILTER_BOOK_LIST_BY_SUBJECTS,
    subjects
});

export const sortBookListByKey = (sortKey) =>
({
    type: ActionTypes.SORT_BOOK_LIST_BY_KEY,
    sortKey
});

export const sortBookListByOrder = (sortOrder) =>
({
    type: ActionTypes.SORT_BOOK_LIST_BY_ORDER,
    sortOrder
});

export const paginateBookListByPageSize = (pageSize) =>
({
    type: ActionTypes.PAGINATE_BOOK_LIST_BY_PAGE_SIZE,
    pageSize
});

export const paginateBookListByCurrentPage = (currentPage) =>
({
    type: ActionTypes.PAGINATE_BOOK_LIST_BY_CURRENT_PAGE,
    currentPage
});

export const setBookSearchPhrase = (searchPhrase) =>
({
    type: ActionTypes.SET_BOOK_SEARCH_PHRASE,
    searchPhrase
});

export const setBookSearchCategory = (searchCategory) =>
({
    type: ActionTypes.SET_BOOK_SEARCH_CATEGORY,
    searchCategory
});