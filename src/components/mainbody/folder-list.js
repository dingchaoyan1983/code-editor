import React from 'react';

export default function(props) {
    return <table className="table table-hover folder-list">
            <tbody>
                <tr>
                    <td>
                        <span className="icon icon-file-text folder-list__icon">
                            Mark
                        </span>
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr> 
                <tr>
                    <td>
                       <span className="icon icon-folder folder-list__icon">
                            Dan
                       </span>
                    </td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
           </table>
}

