import React from 'react';
import CodeEditor from './code-editor';
import FolderList from './folder-list';
import { isFile } from '../../utils';

const { PureComponent } = React;

export default class extends PureComponent {
    constructor(props, context) {
        super(...arguments);
    }

    render() {
        const { splat = '' } = this.props.params;
        let children = <FolderList {...this.props} splat={splat}/>;

        if (isFile(splat)) {
            children = <CodeEditor  {...this.props}/>;
        }

        return <div>
                  {children}
               </div>
    }
}
