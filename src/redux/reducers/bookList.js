import { FETCH_BOOK_LIST, CLEAR_BOOK_LIST } from '../actionTypes';

export const bookList = (state = [], action) =>
{
    switch (action.type)
    {
        case FETCH_BOOK_LIST:
            return [...action.bookList];

        case CLEAR_BOOK_LIST:
            return [];

        default:
            return state;
    }
};