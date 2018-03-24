import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as Loadable from 'react-loadable'

import Root from './Root'

import IndexPage from 'pages/index'
import AuthModule from 'pages/auth'
import SnippetsModule from 'pages/snippets'
import RouteLoading from 'components/ui/RouteLoading'

const routes = (
  <Root>
    <Switch>
      <Route
        exact
        path="/"
        component={Loadable({
          loader: () => import(/* webpackChunkName: 'home' */ 'pages/index'),
          loading: RouteLoading,
          modules: ['home']
        })}
      />
      <Route
        path="/auth"
        component={Loadable({
          loader: () => import(/* webpackChunkName: 'auth' */ 'pages/auth'),
          loading: RouteLoading,
          modules: ['auth']
        })}
      />
      <Route
        path="/snippets"
        component={Loadable({
          loader: () => import(/* webpackChunkName: 'snippets' */ 'pages/snippets'),
          loading: RouteLoading,
          modules: ['snippets']
        })}
      />
      <Route path="/test" render={() => <div>Test Page</div>} />
    </Switch>
  </Root>
)

export default routes
