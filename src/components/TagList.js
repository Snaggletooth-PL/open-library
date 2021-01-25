import React from 'react';
import { Link } from 'react-router-dom';
import { isValid } from '../utils';

function TagList(props)
{
    let tags = [];

    if (isValid(props.tags))
    {
        let tagArray = Array.from(props.tags);

        for (let i = 0; i < tagArray.length; ++i)
        {
            tags.push(<Link key={ 'tag' + i } className="text-reset text-decoration-none" to="#" onClick={ props.onTagClick }><span className="badge m-1">{ tagArray[i] }</span></Link>);
        }
    }

    return (
        <div className="d-flex flex-wrap w-100 m-1">
            { tags }
        </div>
    );
}

export default TagList;