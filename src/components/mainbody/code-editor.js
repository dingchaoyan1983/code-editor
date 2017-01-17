import React from 'react';
import ReactCodemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

const javascript = 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
const options = {
    lineNumbers: true,
	readOnly: true,
	mode: 'javascript'
}
export default function(props) {
    return <ReactCodemirror value={javascript} options={options}/>
}
