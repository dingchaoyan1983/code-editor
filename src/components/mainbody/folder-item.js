import React from 'react';
import { Link } from 'react-router';
import classname from 'classname';
import { FOLDER, FILE } from 'src/constants';

export default function(props) {
    const {name, type, modifiedBy, modifiedTime, splat} = props;

    return <tr>
              <td>
                 <i className={classname('icon', 'folder-list__icon', type === FILE ? 'icon-file-text' : 'icon-folder')}/>
                 <Link to={`${splat}/${name}`}>{name}</Link>    
              </td>
              <td>{modifiedBy}</td>
              <td>{modifiedTime}</td>
           </tr>
}
