import React from 'react';
import {Route} from 'react-router';
import App from 'components';
import Home from 'components/Home';

export default (
    <Route name="app" compoent={App} path="/">
        <Route component={Home} path="home" />
    </Route>
);