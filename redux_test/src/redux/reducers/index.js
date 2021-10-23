// 汇总reducer
import { combineReducers } from 'redux'
import count from './count'
import person from './person'

const alllReducer = combineReducers({ count, person })

export default alllReducer