import Immutable from 'immutable';

const initState = [];

export function loadFolders(parentId) {
    return {
        API_CALL: true,
        url: `/api/projects/${parentId}/folders`,
        types: [,LOAD_SUCC,]
    }
}

const LOAD_SUCC = 'folder/load_succ';

export default function(state = Immutable.fromJS(initState), action) {
    switch(action.type) {
        case LOAD_SUCC:   
            state = state.clear();
            return state.concat(action.payload);
        default:
            return state;
    }
}
