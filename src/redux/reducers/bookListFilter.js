import
{
    FILTER_BOOK_LIST_BY_AUTHOR_AVAILABILITY,
    FILTER_BOOK_LIST_BY_COVER_AVAILABILITY,
    FILTER_BOOK_LIST_BY_YEAR_AVAILABILITY,
    FILTER_BOOK_LIST_BY_YEAR_RANGE,
    FILTER_BOOK_LIST_BY_SUBJECTS
} from '../actionTypes';

const initialState =
{
    onlyWithAuthorAvailable: true,
    onlyWithCoverAvailable: false,
    onlyWithYearAvailable: true,
    minYear: '',
    maxYear: '',
    subjects: []
};

export const bookListFilter = (state = initialState, action) =>
{
    switch (action.type)
    {
        case FILTER_BOOK_LIST_BY_AUTHOR_AVAILABILITY:
            return { ...state, onlyWithAuthorAvailable: action.onlyWithAuthorAvailable };

        case FILTER_BOOK_LIST_BY_COVER_AVAILABILITY:
            return { ...state, onlyWithCoverAvailable: action.onlyWithCoverAvailable };

        case FILTER_BOOK_LIST_BY_YEAR_AVAILABILITY:
            return { ...state, onlyWithYearAvailable: action.onlyWithYearAvailable };

        case FILTER_BOOK_LIST_BY_YEAR_RANGE:
            return { ...state, minYear: action.minYear, maxYear: action.maxYear };

        case FILTER_BOOK_LIST_BY_SUBJECTS:
            return { ...state, subjects: action.subjects };

        default:
            return state;
    }
}