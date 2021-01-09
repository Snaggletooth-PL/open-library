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