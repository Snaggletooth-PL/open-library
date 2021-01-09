import React from 'react';
import { Loader } from '../../components';

const withLoading = (Component) =>
{
    return class extends React.Component
    {
        render()
        {
            const { isLoading, ...restProps } = this.props;

            if (isLoading)
            {
                return <Loader />;
            }

            return <Component { ...restProps } />;
        }
    };
};

export default withLoading;