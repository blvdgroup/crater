import * as React from 'react'
import { Dispatch, connect } from 'react-redux'
import { AuthState } from 'store/auth/types'
import { checkAuth } from 'store/auth/actions'
import { Action } from 'history'
import { ConnectedReduxProps } from 'store'

type Props = ConnectedReduxProps<AuthState>

class AuthCheck extends React.Component<Props> {
  public componentDidMount() {
    this.props.dispatch(checkAuth())
  }
  public render() {
    return null
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(AuthCheck)
