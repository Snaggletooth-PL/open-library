import React from 'react';
import { Link } from 'react-router-dom';

function Tag(props)
{
    return <Link className="text-reset text-decoration-none" to="" onClick={ props.onClick }><span className="badge m-1">{ props.tagName }</span></Link>;
}

export default Tag;