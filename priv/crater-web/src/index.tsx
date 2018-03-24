import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import axios from 'axios'
import * as Cookies from 'js-cookie'

import Routes from './Routes'
import { ApplicationState } from './store'
import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker'
import normalize from 'styles/normalize'
import { setTokenFromCookie, setActiveUser, setLoggedIn } from 'store/auth/actions'

normalize()

const history = createBrowserHistory()

const initialState = window.initialReduxState as ApplicationState
const store = configureStore(history, initialState)

const csrfToken = document.head.querySelector('meta[name="csrf-token"]')
const jwtToken = Cookies.get('token')

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// Make sure APi returns a JSON type
// tslint:disable-next-line:no-string-literal
axios.defaults.headers.common['Accept'] = 'application/json'

if (jwtToken) {
  console.log('Setting token')
  // store.dispatch(setTokenFromCookie(jwtToken))
  axios.defaults.headers.common.Authorization = `Bearer ${jwtToken}`

  console.log('Getting current user from token')
  axios
    .get('/api/v1/users/me')
    .then(res => res.data)
    .then(data => {
      console.log(data.data)
      if (data.data) {
        store.dispatch(setLoggedIn(true))
        store.dispatch(setActiveUser(data.data))
      }
    })
} else {
  console.log('Unauthenticated')
}

if (csrfToken) {
  // If CSRF token is available in <head>, register with Axios
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken.getAttribute('content')
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// We don't use service workers. Unregister any stale service workers.
serviceWorker.unregister()
