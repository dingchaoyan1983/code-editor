import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/index.scss';
import Router from './router';

const ROOT= 'container';

if (process.env.NODE_ENV === 'development') {
    require('./mock');
}

ReactDOM.render(<Router/>, document.getElementById(ROOT));
