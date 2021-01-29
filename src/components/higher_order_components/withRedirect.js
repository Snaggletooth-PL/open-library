import React from 'react';
import { Redirect } from 'react-router-dom';
import { isBoolean, isString } from '../../utils';

const withRedirect = (Component) =>
{
    return class extends React.Component
    {
        render()
        {
            const { redirectCondition, redirectUrl, ...restProps } = this.props;

            if ((isBoolean(redirectCondition) && redirectCondition) && isString(redirectUrl))
            {
                return <Redirect to={ redirectUrl } />;
            }

            return <Component { ...restProps } />;
        }
    };
};

export default withRedirect;