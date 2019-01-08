import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import coins from './coins'
import prices from './prices'

export default combineReducers({
  routing: routerReducer,
  coins,
  prices
})
