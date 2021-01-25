import { bookProperty, isValid, isUnsignedNumber, isBoolean } from '../../utils';

export const getFilteredBookList = (bookList, bookListFilter) =>
{
    let filteredBookList = filterBookListByAuthorAvailability(bookList, bookListFilter.onlyWithAuthorAvailable);
    filteredBookList = filterBookListByCoverAvailability(filteredBookList, bookListFilter.onlyWithCoverAvailable);
    filteredBookList = filterBookListByYearAvailability(filteredBookList, bookListFilter.onlyWithYearAvailable);
    filteredBookList = filterBookListByYearRange(filteredBookList, bookListFilter.minYear, bookListFilter.maxYear);
    filteredBookList = filterBookListBySubjects(filteredBookList, bookListFilter.subjects);

    return filteredBookList;
}

function filterBookListByAuthorAvailability(bookList, onlyWithAuthorAvailable)
{
    let onlyWithPropertyAvailable = isBoolean(onlyWithAuthorAvailable) ? onlyWithAuthorAvailable : false;

    return bookList.filter(book =>
    {
        if (!onlyWithPropertyAvailable)
        {
            return true;
        }

        return !!isValid(book[bookProperty.author]);
    });
}

function filterBookListByCoverAvailability(bookList, onlyWithCoverAvailable)
{
    let onlyWithPropertyAvailable = isBoolean(onlyWithCoverAvailable) ? onlyWithCoverAvailable : false;

    return bookList.filter(book =>
    {
        if (!onlyWithPropertyAvailable)
        {
            return true;
        }

        return !!isUnsignedNumber(book[bookProperty.coverId]);
    });
}

function filterBookListByYearAvailability(bookList, onlyWithYearAvailable)
{
    let onlyWithPropertyAvailable = isBoolean(onlyWithYearAvailable) ? onlyWithYearAvailable : false;

    return bookList.filter(book =>
    {
        if (!onlyWithPropertyAvailable)
        {
            return true;
        }

        return !!isUnsignedNumber(book[bookProperty.year]);
    });
}

function filterBookListByYearRange(bookList, minYear, maxYear)
{
    let isMinYearUnsignedNumber = isUnsignedNumber(minYear), isMaxYearUnsignedNumber = isUnsignedNumber(maxYear);
    let min = isMinYearUnsignedNumber ? minYear : 0;
    let max = isMaxYearUnsignedNumber ? maxYear : Number.MAX_VALUE;

    return bookList.filter(book =>
    {
        if (isUnsignedNumber(book[bookProperty.year]))
        {
            return book[bookProperty.year] >= min && book[bookProperty.year] <= max;
        }
        else
        {
            return !isMinYearUnsignedNumber && !isMaxYearUnsignedNumber;
        }
    });
}

function filterBookListBySubjects(bookList, subjects)
{
    let subjectArray = Array.from(subjects);

    return bookList.filter(book =>
    {
        let bookSubjects = book[bookProperty.subjects];

        if (!isValid(bookSubjects) && subjectArray.length)
        {
            return false;
        }

        return subjectArray.every(subject => bookSubjects.includes(subject));
    });
}