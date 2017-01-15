import React from 'react';
import CodeEditor from './code-editor';
import FolderList from './folder-list';

export default function(props) {
    const {pathname} = props.location;
    console.log(pathname);
    return <div>
                <FolderList/>
                <CodeEditor/>
           </div>
}