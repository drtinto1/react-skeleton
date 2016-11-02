import { combineReducers } from 'redux';

// Reducers
import matchReducer from './match-reducer';

// Combine Reducers
var reducers = combineReducers({
    matchState: matchReducer
});

export default reducers;