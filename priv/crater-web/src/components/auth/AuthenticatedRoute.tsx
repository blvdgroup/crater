import * as React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { connect } from 'react-redux'

import { ApplicationState } from 'store'
import { AuthState } from 'store/auth/types'

interface AuthenticatedRouteProps extends RouteProps {
  auth: AuthState
}

const AuthenticatedRoute: React.SFC<AuthenticatedRouteProps> = ({
  component: Component,
  render,
  children,
  auth,
  ...otherProps
}) => (
  <Route
    {...otherProps}
    render={props => {
      if (auth.isLoggedIn) {
        if (Component) return <Component {...props} />
        if (render) return render(props)
        if (children && typeof children === 'function') return children(props)
        return null
      } else {
        return <Redirect to={{ pathname: '/auth/sign-in', state: { from: props.location } }} />
      }
    }}
  />
)

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AuthenticatedRoute)
