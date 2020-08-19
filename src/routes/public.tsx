import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../services/auth';

function Public({component: Component, auth, ...rest}:any){
    return (
        <Route {...rest} render={props => (
            isLogin()  ? <Redirect to="/" /> : <Component {...props} />
        )} />
    );
}

export default Public;