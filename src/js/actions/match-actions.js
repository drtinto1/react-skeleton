import * as types from './action-types';

export function loadMatchList(matchList) {
    return {
        type: types.MATCH_LIST_LOAD,
        data: matchList
    }
}