import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import AuthSignInPage from './sign-in'
import AuthRegisterPage from './register'
import NotFoundPage from '../404'

const AuthModule: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <Switch>
    <Route path={match.path + '/sign-in'} component={AuthSignInPage} />
    <Route path={match.path + '/register'} component={AuthRegisterPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default AuthModule
