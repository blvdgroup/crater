import * as React from 'react'
import * as ReactDOM from 'react-dom'
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

normalize()

const token = document.head.querySelector('meta[name="csrf-token"]')

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// Make sure APi returns a JSON type
// tslint:disable-next-line:no-string-literal
axios.defaults.headers.common['Accept'] = 'application/json'

if (token) {
  // If CSRF token is available in <head>, register with Axios
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.getAttribute('content')
}

const history = createBrowserHistory()

const initialState = window.initialReduxState as ApplicationState
const store = configureStore(history, initialState)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} children={routes} />
  </Provider>,
  document.getElementById('root')
)

// We don't use service workers. Unregister any stale service workers.
serviceWorker.unregister()
