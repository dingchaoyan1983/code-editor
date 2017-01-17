import React from 'react';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import { Link } from 'react-router';
import Path from 'path';

export default function(props) {
    const { splat = '' } = props.params;
    const paths = splat.split('/');

    const breadcrumbs = paths.map((path, index) => {
        return {
            text: path,
            linkable: index < paths.length - 1,
            route: paths.slice(0, index + 1).join('/')
        }
    });

    return <Breadcrumb className="editor-navigate">
                 <Breadcrumb.Item active={true} key={-1}>
                    <i className="icon icon-home3 home-link"/>
                    <Link to="/">Home</Link>
                 </Breadcrumb.Item>
                {
                    breadcrumbs.map((item, index) =>
                        <Breadcrumb.Item active={true} key={index}>
                            {
                                item.linkable ? <Link to={item.route}>{item.text}</Link> : item.text
                            }
                        </Breadcrumb.Item>
                    )
                }
          </Breadcrumb>
           
}
