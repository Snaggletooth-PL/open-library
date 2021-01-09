import React from 'react';

function PageHeader(props)
{
    return <h2 className="font-weight-bold"><i className={ props.iconClassName }></i> { props.headerName }</h2>;
}

export default PageHeader;