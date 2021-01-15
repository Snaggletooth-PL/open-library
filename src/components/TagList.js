import React from 'react';
import { Tag } from '../components';
import { isValid } from '../Utils';

function TagList(props)
{
    let tags = [];

    if (isValid(props.tags))
    {
        let array = Array.isArray(props.tags) ? props.tags : Array.from(props.tags);

        for (let i = 0; i < array.length; ++i)
        {
            tags.push(<Tag key={ i } tagName={ array[i] } onClick={ props.onClick } />);
        }
    }

    return (
        <div className="d-flex flex-wrap w-100 m-1">
            { tags }
        </div>
    );
}

export default TagList;