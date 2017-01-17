import {connect} from 'react-redux';

import Projects from '../mainbody/projects';
import { loadProjects } from 'src/redux/project';

function mapStatesToProps({projects}) {
    return {
        projects
    };
}

export default connect(mapStatesToProps, {
    loadProjects
})(Projects);
