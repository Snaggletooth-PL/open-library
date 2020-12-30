import React from 'react';

const ErrorMessage = (props) =>
{
    return (
        <div className="text-center"><h4 className="text-danger">{ props.message }</h4></div>
    );
}

export default ErrorMessage;