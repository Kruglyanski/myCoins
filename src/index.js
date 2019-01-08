import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css'
import reducers from './reducers'

const store = createStore( reducers , composeWithDevTools(
  applyMiddleware(thunk, logger)
))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
