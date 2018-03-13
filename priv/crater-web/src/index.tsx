import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import axios from 'axios'

import routes from './routes'
import { ApplicationState } from './store'
import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker'
import normalize from 'styles/normalize'

const token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
  // If CSRF token is available in <head>, register with Axios
  axios.defaults.headers.common['X-XSRF-TOKEN'] = token.getAttribute('content')
}

const history = createBrowserHistory()

const initialState = window.initialReduxState as ApplicationState
const store = configureStore(history, initialState)

normalize()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} children={routes} />
  </Provider>,
  document.getElementById('root')
)

// We don't use service workers. Unregister any stale service workers.
serviceWorker.unregister()
