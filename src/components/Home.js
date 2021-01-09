import React from 'react';
import { PageHeader, SearchContainer } from '../components';

function Home(props)
{
    return (
        <div>

            <PageHeader iconClassName="fas fa-home" headerName="Home" />

            <div className="m-4">
                <SearchContainer onSubmit={ props.onSearchSubmit } />
            </div>

            { props.bookList }

        </div>
    );
}

export default Home;