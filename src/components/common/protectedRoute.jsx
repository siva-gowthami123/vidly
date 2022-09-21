import React from 'react';
import auth from '../../services/authService';
import {Route, Redirect } from 'react-router-dom';
const ProtectedfRoute = ({path, component:Component, render, ...rest }) => {
  return ( 
    <Route
      {...rest}
      render={props => {
       
        if (!auth.getCurrentUser()) 
          return (
            <Redirect 
              to = {{
                pathname: '/login',
                state: {from: props.location}
              }}
            />
          );    
        return Component ? <Component {...props}/> : render(props);
      }}
    />   
  );
};
 
export default ProtectedfRoute;