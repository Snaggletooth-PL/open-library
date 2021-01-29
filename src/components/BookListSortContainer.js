import React from 'react';
import { connect } from 'react-redux';
import { sortBookListByKey, sortBookListByOrder } from '../redux/actions';
import { BookListSort } from '../components';

class BookListSortContainer extends React.Component
{
    onSortKeyDropdownMenuItemClick = (event) =>
    {
        this.props.sortBookListByKey(event.currentTarget.textContent);
    };

    onSortOrderLinkClick = () =>
    {
        this.props.sortBookListByOrder(!this.props.bookListSort.sortOrder);
    };

    render()
    {
        return <BookListSort sortKey={ this.props.bookListSort.sortKey } onSortKeyDropdownMenuItemClick={ this.onSortKeyDropdownMenuItemClick } sortOrder={ this.props.bookListSort.sortOrder } onSortOrderLinkClick={ this.onSortOrderLinkClick } />;
    }
}

const mapStateToProps = (state) =>
{
    return { bookListSort: state.bookListSort };
};

const mapDispatchToProps =
{
    sortBookListByKey,
    sortBookListByOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListSortContainer);