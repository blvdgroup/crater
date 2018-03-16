import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import NotFoundPage from 'pages/404'
import AllSnippetsPage from './all'
import ShowSnippetPage from './show'
import CreateSnippetPage from './create'

const SnippetsModule: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <Switch>
    <Route exact path={match.path + '/'} component={AllSnippetsPage} />
    <Route path={match.path + '/:id'} component={ShowSnippetPage} />
    <Route path={match.path + '/new'} component={CreateSnippetPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default SnippetsModule
