import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { isValid } from '../utils';
import '../styles/TagList.scss';

function TagList(props)
{
    let tags = [];

    if (isValid(props.tags))
    {
        let _tags = Array.isArray(props.tags) ? props.tags : [];

        for (let i = 0; i < _tags.length; ++i)
        {
            tags.push(<Link key={ 'tag' + i } to="#" onClick={ props.onTagClick }><Badge variant="" className="m-1">{ _tags[i] }</Badge></Link>);
        }
    }

    return (
        <div className="d-flex flex-wrap w-100 m-1">
            { tags }
        </div>
    );
}

export default TagList;