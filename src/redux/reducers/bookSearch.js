import { SET_BOOK_SEARCH_PHRASE, SET_BOOK_SEARCH_CATEGORY } from '../actionTypes';
import { searchCategories } from '../../utils';

const initialState =
{
    searchPhrase: '',
    searchCategory: searchCategories[0]
};

export const bookSearch = (state = initialState, action) =>
{
    switch (action.type)
    {
        case SET_BOOK_SEARCH_PHRASE:
            return { ...state, searchPhrase: action.searchPhrase };

        case SET_BOOK_SEARCH_CATEGORY:
            return { ...state, searchCategory: action.searchCategory };

        default:
            return state;
    }
};