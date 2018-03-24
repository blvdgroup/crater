import * as React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import * as Loadable from 'react-loadable'

import AuthSignInPage from './sign-in'
import AuthRegisterPage from './register'
import NotFoundPage from '../404'
import RouteLoading from 'components/ui/RouteLoading'

const AuthModule: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <Switch>
    <Route
      path={match.path + '/sign-in'}
      component={Loadable({
        loader: () => import(/* webpackChunkName: 'auth~sign-in' */ './sign-in'),
        loading: RouteLoading
      })}
    />
    <Route
      path={match.path + '/register'}
      component={Loadable({
        loader: () => import(/* webpackChunkName: 'auth~register' */ './register'),
        loading: RouteLoading
      })}
    />
    <Route
      component={Loadable({
        loader: () => import(/* webpackChunkName: '404' */ '../404'),
        loading: RouteLoading
      })}
    />
  </Switch>
)

export default AuthModule
