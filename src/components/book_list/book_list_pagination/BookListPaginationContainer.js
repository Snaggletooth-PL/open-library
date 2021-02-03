import React from 'react';
import { connect } from 'react-redux';
import { paginateBookListByPageSize, paginateBookListByCurrentPage } from '../../../redux/actions';
import { BookListPagination } from '../../../components';
import { isNumber, pagination } from '../../../utils';

class BookListPaginationContainer extends React.Component
{
    onPageSizeDropdownMenuItemClick = (event) =>
    {
        this.props.paginateBookListByPageSize(parseInt(event.currentTarget.textContent));
    };

    onPageNumberPaginationItemClick = (event) =>
    {
        let paginationItemValue = event.currentTarget.textContent;

        if (paginationItemValue === pagination.previousPage)
        {
            this.props.paginateBookListByCurrentPage(this.props.bookListPagination.currentPage - 1);
        }
        else if (paginationItemValue === pagination.nextPage)
        {
            this.props.paginateBookListByCurrentPage(this.props.bookListPagination.currentPage + 1);
        }
        else if (isNumber(paginationItemValue))
        {
            this.props.paginateBookListByCurrentPage(parseInt(paginationItemValue));
        }
    };

    render()
    {
        return <BookListPagination numberOfPaginationItems={ Math.ceil(this.props.numberOfFilteredBooks / this.props.bookListPagination.pageSize) }
            pageSize={ this.props.bookListPagination.pageSize } onPageSizeDropdownMenuItemClick={ this.onPageSizeDropdownMenuItemClick }
            currentPage={ this.props.bookListPagination.currentPage } onPageNumberPaginationItemClick={ this.onPageNumberPaginationItemClick } />;
    }
}

const mapStateToProps = (state) =>
{
    return { bookListPagination: state.bookListPagination };
};

const mapDispatchToProps = { paginateBookListByPageSize, paginateBookListByCurrentPage };

export default connect(mapStateToProps, mapDispatchToProps)(BookListPaginationContainer);