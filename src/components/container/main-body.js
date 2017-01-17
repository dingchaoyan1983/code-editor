import {connect} from 'react-redux';
import MainBody from '../mainbody';
import { loadFolders } from 'src/redux/reducers/folder';

function mapStatesToProps({folders, file}) {
    return {
        folders,
        file
    };
}

export default connect(mapStatesToProps)(MainBody);
