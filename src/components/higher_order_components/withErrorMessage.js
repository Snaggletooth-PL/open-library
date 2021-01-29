import React from 'react';
import { ErrorMessage } from '../../components';
import { isString } from '../../utils';

const withErrorMessage = (Component) =>
{
    return class extends React.Component
    {
        render()
        {
            const { errorMessage, ...restProps } = this.props;

            if (isString(errorMessage) && errorMessage.length)
            {
                return <ErrorMessage errorMessage={ errorMessage } />;
            }

            return <Component { ...restProps } />;
        }
    };
};

export default withErrorMessage;