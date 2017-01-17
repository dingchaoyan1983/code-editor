import {combineReducers} from 'redux';
import projects from './project';
import folders from './folder';

export default combineReducers({
    projects,
    folders
});
