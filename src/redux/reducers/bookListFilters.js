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
    isFilterBookListByAuthorAvailabilityEnabled: true,
    isFilterBookListByCoverAvailabilityEnabled: false,
    isFilterBookListByYearAvailabilityEnabled: true,
    filterBookListByYearRangeMinYear: '',
    filterBookListByYearRangeMaxYear: '',
    filterBookListBySubjectsTagList: []
};

export const bookListFilters = (state = initialState, action) =>
{
    switch (action.type)
    {
        case FILTER_BOOK_LIST_BY_AUTHOR_AVAILABILITY:
            return { ...state, isFilterBookListByAuthorAvailabilityEnabled: action.isFilterBookListByAuthorAvailabilityEnabled };

        case FILTER_BOOK_LIST_BY_COVER_AVAILABILITY:
            return { ...state, isFilterBookListByCoverAvailabilityEnabled: action.isFilterBookListByCoverAvailabilityEnabled };

        case FILTER_BOOK_LIST_BY_YEAR_AVAILABILITY:
            return { ...state, isFilterBookListByYearAvailabilityEnabled: action.isFilterBookListByYearAvailabilityEnabled };

        case FILTER_BOOK_LIST_BY_YEAR_RANGE:
            return { ...state, filterBookListByYearRangeMinYear: action.filterBookListByYearRangeMinYear, filterBookListByYearRangeMaxYear: action.filterBookListByYearRangeMaxYear };

        case FILTER_BOOK_LIST_BY_SUBJECTS:
            return { ...state, filterBookListBySubjectsTagList: action.filterBookListBySubjectsTagList };

        default:
            return state;
    }
}