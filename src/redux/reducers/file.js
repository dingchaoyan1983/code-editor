import Immutable from 'immutable';

const initState = {
    content: ''
};

export function loadContent(extname) {
    return {
        API_CALL: true,
        url: `/api/projects/projectId/folders/folderId/files/fileId`,
        data: {extname},
        types: [,LOAD_SUCC,]
    }
}

const LOAD_SUCC = 'file/load_succ';

export default function(state = Immutable.fromJS(initState), action) {
    switch(action.type) {
        case LOAD_SUCC:   
            return state.set('content', action.payload);
        default:
            return state;
    }
}
