import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from 'codemirror';
import classname from 'classname';
import './codemirror-merge-shim';
import 'codemirror/addon/merge/merge';
import 'codemirror/addon/merge/merge.css';

const { findDOMNode } = ReactDOM;

export default class MergeView extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div ref="diffView" className={classname('ReactDiffView', this.props.className)}></div>
    }

    componentDidMount() {
        const diffViewDiv = findDOMNode(this.refs.diffView);
        this.mergeView = CodeMirror.MergeView(diffViewDiv, {
            value: this.props.curr,
            origLeft: this.props.prev,
            lineNumbers: true,
            mode: 'javascript',
            highlightDifferences: true,
            readOnly: true,
            revertButtons: false
        });
    }
}