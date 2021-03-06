/**
 * Router configrations
 */
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import apiMiddleware from './redux/api-middleware';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';

import App from './app';
import MainBody from './components/container/main-body';
import Projects from './components/container/projects';

import { loadFolders } from './redux/reducers/folder';
import { loadContent } from './redux/reducers/file';
import { loadProjects } from './redux/reducers/project';

import { isFile, extname } from './utils';

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
const {dispatch} = store;

export default function(props) {
    return <Provider store={store}>
                <Router history={ hashHistory }>
                    <Route path="/" component={ App } >
                        <Route path="*" component={ MainBody } onEnter={({params: {splat=''}}={}) => {
                            if(isFile(splat)) {
                                dispatch(loadContent(extname(splat)));
                            } else {
                                dispatch(loadFolders());
                            }
                        }}/>
                        <IndexRoute component={ Projects } onEnter = {() => dispatch(loadProjects())}/>
                    </Route>
                </Router>
            </Provider>
}
