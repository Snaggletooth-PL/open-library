import React from 'react';

class Search extends React.Component
{
    state = { searchPhrase: '' };

    onInputChange = (event) =>
    {
        this.setState({ searchPhrase: event.target.value });
    }

    onSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onSubmit(this.state.searchPhrase);
    }

    render()
    {
        return (
            <form onSubmit={ this.onSubmit }>

                <h3 className="text-center mb-3">Search books or authors</h3>

                <div className="input-group input-group-lg">

                    <input type="text" className="form-control" placeholder="Search" onChange={ this.onInputChange } />

                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-search fa-flip-horizontal"></i></span>
                    </div>

                </div>

            </form>
        );
    }
}

export default Search;