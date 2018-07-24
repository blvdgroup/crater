import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { checkAuth } from 'store/auth/actions'

interface AuthCheckProps {
  checkAuth: () => void
}

class AuthCheck extends React.Component<AuthCheckProps> {
  public componentDidMount() {
    this.props.checkAuth()
  }

  public render() {
    return null
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkAuth: () => dispatch(checkAuth())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthCheck)
