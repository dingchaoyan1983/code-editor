import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './app';
import MainBody from './components/mainbody';
import Projects from './components/container/projects';

export default function(props) {
    return <Router history={hashHistory}>
            <Route path="/" component={App} >
                <Route path="*" component={MainBody}/>
                <IndexRoute component={Projects}/>
            </Route>
           </Router>
}