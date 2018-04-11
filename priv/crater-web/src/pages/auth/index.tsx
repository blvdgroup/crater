import * as React from 'react'
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'
import * as Loadable from 'react-loadable'

import LoadingPage from 'pages/loading'

const AuthModule: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <Switch>
    <Route
      path={match.path + '/sign-in'}
      component={Loadable({
        loader: () => import(/* webpackChunkName: 'auth~sign-in' */ './sign-in'),
        loading: LoadingPage
      })}
    />
    <Route
      path={match.path + '/register'}
      component={Loadable({
        loader: () => import(/* webpackChunkName: 'auth~register' */ './register'),
        loading: LoadingPage
      })}
    />
    <Route render={() => <Redirect to={match.path + '/sign-in'} />} />
  </Switch>
)

export default AuthModule
