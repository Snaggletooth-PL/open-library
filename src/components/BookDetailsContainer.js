import React from 'react';
import { Redirect } from 'react-router-dom';
import { BookDetails } from '../components';
import { bookProperty, isValid, olApi } from '../utils';

class BookDetailsContainer extends React.Component
{
    state = { book: {} };

    componentDidMount()
    {
        if (isValid(this.props.location.state))
        {
            olApi.get(`${ this.props.match.params.key }/${ this.props.match.params.id }.json`).then((response) =>
            {
                let data = response.data;
                let book = {};
                book[bookProperty.title] = data[bookProperty.title];
                book[bookProperty.description] = data[bookProperty.description];
                book[bookProperty.links] = data[bookProperty.links];
                book[bookProperty.subjects] = data[bookProperty.subjects] || data.subjects;
                book[bookProperty.coverId] = this.props.location.state[bookProperty.coverId];
                book[bookProperty.author] = this.props.location.state[bookProperty.author];
                book[bookProperty.year] = this.props.location.state[bookProperty.year];

                this.setState({ book });
            });
        }
    }

    render()
    {
        if (!isValid(this.props.location.state))
        {
            return <Redirect to="/" />;
        }

        return <BookDetails book={ this.state.book } />;
    }
}

export default BookDetailsContainer;