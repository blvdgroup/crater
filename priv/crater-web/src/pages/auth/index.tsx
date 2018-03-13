import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import AuthSignInPage from './sign-in'
import NotFoundPage from '../404'

const AuthModule: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <Switch>
    <Route path={match.path + '/sign-in'} component={AuthSignInPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default AuthModule
