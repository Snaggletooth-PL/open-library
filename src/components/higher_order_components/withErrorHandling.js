import React from 'react';
import { ErrorMessage } from '../../components';

const withErrorHandling = Component =>
{
    return class extends React.Component
    {
        render()
        {
            const { errorMessage, ...restProps } = this.props;

            if (errorMessage)
            {
                return <ErrorMessage message={ errorMessage } />;
            }

            return <Component { ...restProps } />;
        }
    }
}

export default withErrorHandling;