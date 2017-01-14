import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

import App from './app';
import MainBody from './components/mainbody';
import Projects from './components/mainbody/projects';

export default function(props) {
    return <Router history={hashHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Projects}/>
                <Route path="*" component={MainBody}/>
            </Route>
           </Router>
}