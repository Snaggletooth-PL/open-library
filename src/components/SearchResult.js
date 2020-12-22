import React from 'react';
import BookList from './BookList';

class SearchResult extends React.Component
{
    state = { resultList: [] };

    componentDidMount()
    {
        this.setState({ resultList: this.props.resultList });
    }

    render()
    {
        let result = <p className="text-center text-danger">Nothing found...</p>;

        if (this.state.resultList.length > 0)
        {
            result = <BookList list={ this.state.resultList } />;
        }

        return (
            <div className="p-2">

                <h4 className="text-center mb-3">Results</h4>

                { result }

            </div>
        );
    }
}

export default SearchResult;