import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    

    // localStorage.setItem('lastPath', rest.location.pathname);
    const lastPath = localStorage.getItem('lastPath') || '/'
    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Redirect to={lastPath} /> )
                    : ( <Component { ...props } /> )
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
