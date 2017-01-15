import React from 'react';

import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Col from 'react-bootstrap/lib/Col';

import {Link} from 'react-router';
import Path from 'path';

export default function(props) {
    const { splat = '' } = props.params;
    const paths = splat.split('/');

    const breadcrumbs = paths.map((path, index) => {
        return {
            text: path,
            route: paths.slice(0, index + 1).join('/')
        }
    });

    return <div>
            <Breadcrumb className="editor-navigate">
                {
                    breadcrumbs.map((item, index) => <Breadcrumb.Item active={true} key={index}><Link to={item.route}>{item.text}</Link></Breadcrumb.Item>)
                }
            </Breadcrumb>
           </div>
}
