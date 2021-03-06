// Node
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// Own Reducers
import { session } from './reducers/SessionReducers';
import { ui } from './reducers/UiReducers';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    session,
    ui,
});

export default createRootReducer;