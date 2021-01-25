import { isUnsignedNumber, pagination } from "../../utils";

export const getPaginatedBookList = (bookList, bookListPagination) =>
{
    let pageSize = isUnsignedNumber(bookListPagination.pageSize) ? bookListPagination.pageSize : pagination.pageSizes[0];
    let currentPage = isUnsignedNumber(bookListPagination.currentPage) ? bookListPagination.currentPage : pagination.firstPage;
    let startIndex = pageSize * (currentPage - 1);
    let endIndex = startIndex + Math.min(bookList.length - (startIndex + 1), pageSize - 1);
    let paginatedBookList = [];

    for (let i = startIndex; i <= endIndex; ++i)
    {
        paginatedBookList.push(bookList[i]);
    }

    return paginatedBookList;
};