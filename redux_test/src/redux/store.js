import { createStore, applyMiddleware } from 'redux'
import allReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))