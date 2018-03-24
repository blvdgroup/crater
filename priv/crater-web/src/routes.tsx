import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as Loadable from 'react-loadable'

import Root from './Root'

import LoadingPage from 'pages/loading'

const Routes: React.SFC = () => (
  <Root>
    <Switch>
      <Route
        exact
        path="/"
        component={Loadable({
          loader: () => import(/* webpackChunkName: 'home' */ 'pages/index'),
          loading: LoadingPage,
          modules: ['home']
        })}
      />
      <Route
        path="/auth"
        component={Loadable({
          loader: () => import(/* webpackChunkName: 'auth' */ 'pages/auth'),
          loading: LoadingPage,
          modules: ['auth']
        })}
      />
      <Route
        path="/snippets"
        component={Loadable({
          loader: () => import(/* webpackChunkName: 'snippets' */ 'pages/snippets'),
          loading: LoadingPage,
          modules: ['snippets']
        })}
      />
      <Route path="/test" render={() => <div>Test Page</div>} />
    </Switch>
  </Root>
)

export default Routes
