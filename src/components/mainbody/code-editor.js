import React from 'react';
import ReactCodemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

const options = {
    lineNumbers: true,
	readOnly: true,
	mode: 'javascript'
}

export default function(props) {
    const content = props.file.get('content');
    return <ReactCodemirror value={content} options={options}/>
}
