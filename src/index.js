import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import Router from './router';
import rootReducer from './redux';
import '../assets/index.scss';
import apiMiddleware from './redux/api-middleware';

if (process.env.NODE_ENV === 'development') {
    require('./mock');
}

const ROOT= 'container';
const store = createStore(rootReducer, applyMiddleware(apiMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>, document.getElementById(ROOT));
