import { isValid, isUnsignedNumber, isBoolean } from '../Utils';

export const getFilteredBookList = (bookList, bookListFilters) =>
{
    let filteredBookList = filterBookListByAuthorAvailability(bookList, bookListFilters.isFilterBookListByAuthorAvailabilityEnabled);
    filteredBookList = filterBookListByCoverAvailability(filteredBookList, bookListFilters.isFilterBookListByCoverAvailabilityEnabled);
    filteredBookList = filterBookListByYearAvailability(filteredBookList, bookListFilters.isFilterBookListByYearAvailabilityEnabled);
    filteredBookList = filterBookListByYearRange(filteredBookList, bookListFilters.filterBookListByYearRangeMinYear, bookListFilters.filterBookListByYearRangeMaxYear);
    filteredBookList = filterBookListBySubjects(filteredBookList, bookListFilters.filterBookListBySubjectsTagList);

    return filteredBookList;
}

function filterBookListByAuthorAvailability(bookList, isFilterBookListByAuthorAvailabilityEnabled)
{
    let isEnabled = isBoolean(isFilterBookListByAuthorAvailabilityEnabled) ? isFilterBookListByAuthorAvailabilityEnabled : false;

    return bookList.filter(book =>
    {
        if (!isEnabled)
        {
            return true;
        }

        return !!isValid(book.author_name);
    });
}

function filterBookListByCoverAvailability(bookList, isFilterBookListByCoverAvailabilityEnabled)
{
    let isEnabled = isBoolean(isFilterBookListByCoverAvailabilityEnabled) ? isFilterBookListByCoverAvailabilityEnabled : false;

    return bookList.filter(book =>
    {
        if (!isEnabled)
        {
            return true;
        }

        return !!isUnsignedNumber(book.cover_i);
    });
}

function filterBookListByYearAvailability(bookList, isFilterBookListByYearAvailabilityEnabled)
{
    let isEnabled = isBoolean(isFilterBookListByYearAvailabilityEnabled) ? isFilterBookListByYearAvailabilityEnabled : false;

    return bookList.filter(book =>
    {
        if (!isEnabled)
        {
            return true;
        }

        return !!isUnsignedNumber(book.first_publish_year);
    });
}

function filterBookListByYearRange(bookList, filterBookListByYearRangeMinYear, filterBookListByYearRangeMaxYear)
{
    let isMinYearUnsignedNumber = isUnsignedNumber(filterBookListByYearRangeMinYear), isMaxYearUnsignedNumber = isUnsignedNumber(filterBookListByYearRangeMaxYear);
    let minYear = isMinYearUnsignedNumber ? filterBookListByYearRangeMinYear : 0;
    let maxYear = isMaxYearUnsignedNumber ? filterBookListByYearRangeMaxYear : Number.MAX_VALUE;

    return bookList.filter(book =>
    {
        if (isUnsignedNumber(book.first_publish_year))
        {
            return book.first_publish_year >= minYear && book.first_publish_year <= maxYear;
        }
        else
        {
            return !isMinYearUnsignedNumber && !isMaxYearUnsignedNumber;
        }
    });
}

function filterBookListBySubjects(bookList, filterBookListBySubjectsTagList)
{
    let tagList = Array.from(filterBookListBySubjectsTagList);

    return bookList.filter(book =>
    {
        let subjects = book.subject;

        if (!isValid(subjects))
        {
            return false;
        }

        return tagList.every(tag => subjects.includes(tag));
    });
}