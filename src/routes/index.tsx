import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './private';
import PublicRoute from './public';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

function Routes(){
    return(
        <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="*" component={Login} />
        </Switch>
    );
}

export default Routes;