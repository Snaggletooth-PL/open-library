import { bookProperty, isValid, sortKey, sortOrder } from '../../utils';

export const getSortedBookList = (bookList, bookListSort) =>
{
    let books = Array.isArray(bookList) ? bookList : [];

    switch (bookListSort.sortKey)
    {
        case sortKey.title:
            return books.sort(sort(bookProperty.title, bookListSort.sortOrder));

        case sortKey.author:
            return books.sort(sort(bookProperty.author, bookListSort.sortOrder));

        case sortKey.year:
            return books.sort(sort(bookProperty.year, bookListSort.sortOrder));

        default:
            return books;
    }
};

function sort(bookProperty, order)
{
    switch (order)
    {
        case sortOrder.ascending:
            return sortAscending(bookProperty);

        case sortOrder.descending:
            return sortDescending(bookProperty);

        default:
            return 0;
    }
}

function sortAscending(bookProperty)
{
    return function (book1, book2)
    {
        let property1 = book1[bookProperty], property2 = book2[bookProperty];

        if ((isValid(property1) && isValid(property2) && property1 < property2) || !isValid(property2))
        {
            return -1;
        }

        if ((isValid(property1) && isValid(property2) && property1 > property2) || !isValid(property1))
        {
            return 1;
        }

        return 0;
    };
}

function sortDescending(bookProperty)
{
    return function (book1, book2)
    {
        let property1 = book1[bookProperty], property2 = book2[bookProperty];

        if ((isValid(property1) && isValid(property2) && property1 > property2) || !isValid(property2))
        {
            return -1;
        }

        if ((isValid(property1) && isValid(property2) && property1 < property2) || !isValid(property1))
        {
            return 1;
        }

        return 0;
    };
}