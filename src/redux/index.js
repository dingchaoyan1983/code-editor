import {combineReducers} from 'redux';
import projects from './project';
import folders from './folder';
import loadingSpinner from './loading-spinner';

export default combineReducers({
    projects,
    folders,
    loadingSpinner
});
