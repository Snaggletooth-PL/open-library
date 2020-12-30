import React from 'react';
import { Book } from '../components';
import '../styles/BookList.scss';

class BookList extends React.Component
{
    state = { list: [] };

    componentDidMount()
    {
        this.setState({ list: this.props.list });
    }

    render()
    {
        return (
            <div className="m-4 p-2">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <p className="m-0">Found <strong>{ this.state.list.length }</strong> books.</p>

                </div>

                <div className="row justify-content-center mx-auto w-100">
                    { this.state.list.map(book => <Book key={ book.key } book={ book } />) }
                </div>

            </div>
        );
    }
}

export default BookList;