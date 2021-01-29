import React from 'react';

function PageHeader(props)
{
    return <h2 className="font-weight-bold mb-4"><i className={ props.iconClassName }></i><span className="ml-2">{ props.headerName }</span></h2>;
}

export default PageHeader;