import React from 'react';
import CodeEditor from './code-editor';
import FolderList from './folder-list';

const { PureComponent } = React;

export default class extends PureComponent {
    constructor(props, context) {
        super(...arguments);
    }

    render() {
        const { splat = '' } = this.props.params;
        const paths = splat.split('/');

        return <div>
                <FolderList {...this.props} splat={splat}/>
                <CodeEditor/>
               </div>
    }
}
