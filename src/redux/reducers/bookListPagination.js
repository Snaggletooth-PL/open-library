import { PAGINATE_BOOK_LIST_BY_PAGE_SIZE, PAGINATE_BOOK_LIST_BY_CURRENT_PAGE } from '../actionTypes';
import { pagination } from '../../utils';

const initialState =
{
    pageSize: pagination.pageSizes[0],
    currentPage: pagination.firstPage
};

export const bookListPagination = (state = initialState, action) =>
{
    switch (action.type)
    {
        case PAGINATE_BOOK_LIST_BY_PAGE_SIZE:
            return { ...state, pageSize: action.pageSize, currentPage: initialState.currentPage };

        case PAGINATE_BOOK_LIST_BY_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        default:
            return state;
    }
};