import React from 'react';
import { SearchContainer } from '../components';

function Home(props)
{
    return (
        <div>

            <h2 className="font-weight-bold"><i className="fas fa-home"></i> Home</h2>

            <div className="m-4">
                <SearchContainer onSubmit={ props.onSearchSubmit } />
            </div>

            { props.bookList }

        </div>
    );
}

export default Home;