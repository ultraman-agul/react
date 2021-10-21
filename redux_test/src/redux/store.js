import { createStore, applyMiddleware } from 'redux'
import reducerCount from './count_reducer'
import thunk from 'redux-thunk'

export default createStore(reducerCount, applyMiddleware(thunk))