import * as types from '../actions/action-types';

const initialState = {
    matches: null
};

const matchReducer = function(state = initialState, action) {

    switch(action.type) {
        case types.MATCH_LIST_LOAD:
            return Object.assign({}, state, {
                matches: action.data
            });
    }

    return state;

};

export default matchReducer;