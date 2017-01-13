import React from 'react';
import Header from './components/header';

export default function(props) {
    return <div>
            <Header/>
            {props.children}
           </div>
}