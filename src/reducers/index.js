import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import coins from './coins'

export default combineReducers({
  routing: routerReducer,
  coins
})
