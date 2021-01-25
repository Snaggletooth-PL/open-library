import { SORT_BOOK_LIST_BY_KEY, SORT_BOOK_LIST_BY_ORDER } from '../actionTypes';
import { sortKey, sortOrder } from '../../utils';

const initialState =
{
    sortKey: sortKey.title,
    sortOrder: sortOrder.ascending
};

export const bookListSort = (state = initialState, action) =>
{
    switch (action.type)
    {
        case SORT_BOOK_LIST_BY_KEY:
            return { ...state, sortKey: action.sortKey };

        case SORT_BOOK_LIST_BY_ORDER:
            return { ...state, sortOrder: action.sortOrder };

        default:
            return state;
    }
};