import React from 'react';

export default function (props) {
    const {shown = false} = props.loadingSpinner.toJS();
    let dom = shown ? <div className="loading-spinner"/> : null;
    return dom;
}
