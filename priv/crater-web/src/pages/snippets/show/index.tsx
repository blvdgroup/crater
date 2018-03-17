import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import NotFoundPage from 'pages/404'
import ShowSnippetPage from './show'
import EditSnippetPage from './edit'

const ShowSnippetModule: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <Switch>
    <Route exact path={match.path + '/'} component={ShowSnippetPage} />
    <Route exact path={match.path + '/edit'} component={EditSnippetPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default ShowSnippetModule
