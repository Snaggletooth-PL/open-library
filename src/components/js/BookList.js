import React from 'react';
import Book from '../js/Book';
import '../scss/BookList.scss'

class BookList extends React.Component {
    render() {
        return (
            <div className="row justify-content-center mx-auto w-100 my-4">
                {this.props.list.map(book => <Book key={book.key} book={book} />)}
            </div>
        );
    }
}

export default BookList;