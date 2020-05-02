// Node
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// Own Reducers

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
});

export default createRootReducer;