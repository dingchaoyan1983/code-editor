import Immutable from 'immutable';

const initState = {
    content: '',
    extname: ''
};

export function loadContent(extname) {
    return {
        API_CALL: true,
        url: `/api/projects/projectId/folders/folderId/files/fileId`,
        data: {extname},
        types: [,LOAD_SUCC,]
    }
}

export function modifyContent(extname, code) {
    return {
        API_CALL: true,
        method: 'PUT',
        url: `/api/projects/projectId/folders/folderId/files/fileId`,
        data: {
            extname,
            code
        },
        types: [,LOAD_SUCC,]
    }
}

const LOAD_SUCC = 'file/load_succ';

export default function(state = Immutable.fromJS(initState), action) {
    switch(action.type) {
        case LOAD_SUCC:   
            state = state.set('content', '');
            return state.withMutations(function (state) {
                        state.set('content', action.payload.code);
                        state.set('extname', action.payload.extname);
                        return state;
                   });
        default:
            return state;
    }
}
