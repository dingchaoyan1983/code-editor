import React from 'react';
import { Router, Route, hashHistory, Redirect, IndexRedirect } from 'react-router';

import App from './app';
import MainBody from './components/mainbody';

export default function(props) {
    return <Router history={hashHistory}>
            <Route path="/" component={App} >
                <Route path="*" component={MainBody}/>
            </Route>
           </Router>
}