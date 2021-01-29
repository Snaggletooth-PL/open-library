import React from 'react';
import { Loader } from '../../components';
import { isBoolean } from '../../utils';

const withLoading = (Component) =>
{
    return class extends React.Component
    {
        render()
        {
            const { isLoading, ...restProps } = this.props;

            if (isBoolean(isLoading) && isLoading)
            {
                return <Loader />;
            }

            return <Component { ...restProps } />;
        }
    };
};

export default withLoading;