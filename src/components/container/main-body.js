import {connect} from 'react-redux';
import MainBody from '../mainbody';
import { loadFolders } from 'src/redux/folder';

function mapStatesToProps({folders}) {
    return {
        folders
    };
}

export default connect(mapStatesToProps)(MainBody);
