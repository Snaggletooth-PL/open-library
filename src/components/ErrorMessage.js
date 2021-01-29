import React from 'react';

function ErrorMessage(props)
{
    return <div className="text-center"><h4 className="text-danger">{ props.errorMessage }</h4></div>;
}

export default ErrorMessage;