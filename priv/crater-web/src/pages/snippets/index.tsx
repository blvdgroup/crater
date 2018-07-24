import * as React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import * as Loadable from 'react-loadable'

import NotFoundPage from 'pages/404'
import LoadingPage from 'pages/loading'
import AuthenticatedRoute from 'components/auth/AuthenticatedRoute'

const SnippetsModule: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <Switch>
    <Route
      exact
      path={match.path + '/'}
      component={Loadable({
        loader: () => import(/* webpackChunkName: 'snippets~index' */ './all'),
        loading: LoadingPage
      })}
    />
    <AuthenticatedRoute
      exact
      path={match.path + '/new'}
      component={Loadable({
        loader: () => import(/* webpackChunkName: 'snippets~create' */ './create'),
        loading: LoadingPage
      })}
    />
    <Route
      path={match.path + '/:id'}
      component={Loadable({
        loader: () => import(/* webpackChunkName: 'snippets~show' */ './show'),
        loading: LoadingPage
      })}
    />
    <Route component={NotFoundPage} />
  </Switch>
)

export default SnippetsModule
