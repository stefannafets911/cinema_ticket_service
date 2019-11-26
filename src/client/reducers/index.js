import { combineReducers } from 'redux';
import getCinemaInfo from './getCinemaReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
    cinema: getCinemaInfo,
    options: modal,
});

export default rootReducer;