import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import getDatas from "./reducers/getDatas"

const rootReducer = combineReducers({
    getDatas
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;