import React from 'react';
import { Link } from 'react-router';

export default function(props) {
    return <table className="table table-hover folder-list">
            <tbody>
                <tr>
                    <td>
                       <i className="icon icon-file-text folder-list__icon"/>
                       <Link to="test/test/test/test/test.js">Otto</Link>    
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr> 
                <tr>
                    <td>
                       <i className="icon icon-folder folder-list__icon"/>
                       <Link to="test/test/test/test/test1">test1</Link>
                    </td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
           </table>
}
