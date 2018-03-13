import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Root from './Root'

import IndexPage from './pages'
import AuthModule from './pages/auth'

const routes = (
  <Root>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/auth" component={AuthModule} />
      <Route path="/test" render={() => <div>Test Page</div>} />
    </Switch>
  </Root>
)

export default routes
