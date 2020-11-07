import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../services/auth';
import { useSelector } from 'react-redux';

function Public({component: Component, auth, ...rest}:any){

    const token = useSelector((state:ApplicationService)=>state.auth.token)
    
    return (
        <Route {...rest} render={props => (
            token  ? <Redirect to="/" /> : <Component {...props} />
        )} />
    );
}

export default Public;