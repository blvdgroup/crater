import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Root from './Root'

import IndexPage from 'pages/index'
import AuthModule from 'pages/auth'
import SnippetsModule from 'pages/snippets'

const routes = (
  <Root>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/auth" component={AuthModule} />
      <Route path="/snippets" component={SnippetsModule} />
      <Route path="/test" render={() => <div>Test Page</div>} />
    </Switch>
  </Root>
)

export default routes
