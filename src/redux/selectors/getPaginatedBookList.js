import { isUnsignedNumber, pagination } from "../../utils";

export const getPaginatedBookList = (bookList, bookListPagination) =>
{
    let books = Array.isArray(bookList) ? bookList : [];
    let pageSize = isUnsignedNumber(bookListPagination.pageSize) ? bookListPagination.pageSize : pagination.pageSizes[0];
    let currentPage = isUnsignedNumber(bookListPagination.currentPage) ? bookListPagination.currentPage : pagination.firstPage;
    let startIndex = pageSize * (currentPage - 1);
    let endIndex = startIndex + Math.min(books.length - (startIndex + 1), pageSize - 1);
    let paginatedBookList = [];

    for (let i = startIndex; i <= endIndex; ++i)
    {
        paginatedBookList.push(books[i]);
    }

    return paginatedBookList;
};