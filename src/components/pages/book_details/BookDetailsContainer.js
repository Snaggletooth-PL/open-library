import React from 'react';
import { BookDetails } from '../../../components';
import { withRedirect } from '../../higher_order_components';
import { bookProperty, isValid, olApi } from '../../../utils';

const BookDetailsWithRedirect = withRedirect(BookDetails);

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
                book[bookProperty.coverId] = this.props.location.state[bookProperty.coverId];
                book[bookProperty.author] = this.props.location.state[bookProperty.author];
                book[bookProperty.year] = this.props.location.state[bookProperty.year];
                book[bookProperty.publishers] = this.props.location.state[bookProperty.publishers];
                book[bookProperty.links] = data[bookProperty.links];
                book[bookProperty.description] = data[bookProperty.description];
                book[bookProperty.subjects] = data[bookProperty.subjects] || data.subjects;
                this.setState({ book });
            });
        }
    }

    render()
    {
        return <BookDetailsWithRedirect redirectCondition={ !isValid(this.props.location.state) } redirectUrl="/" book={ this.state.book } />;
    }
}

export default BookDetailsContainer;