import * as React from 'react'
import axios from 'axios'
import * as Cookies from 'js-cookie'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'

import AuthSignInForm from 'components/auth/AuthSignInForm'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import { ApplicationState, ConnectedReduxProps } from 'store'
import { AuthState } from 'store/auth/types'
import { setLoggedIn } from 'store/auth/actions'

interface AuthSignInPageState {
  formState: {
    username: string
    password: string
  }
}

type Props = RouteComponentProps<{}> & AuthState & ConnectedReduxProps<AuthState>

class AuthSignInPage extends React.Component<Props, AuthSignInPageState> {
  public render() {
    return (
      <Page>
        <Container size="md">
          <AuthSignInForm onFormFinished={this.handleFormFinished} />
        </Container>
      </Page>
    )
  }

  private handleFormFinished = (data: any) => {
    console.log('onFormFinished')
    const { dispatch, history } = this.props

    if (data.status === 'ok') {
      if (data.data.token) {
        Cookies.set('token', data.data.token, { expires: 14 })
      }
    }

    dispatch(setLoggedIn(true))
    history.push('/')
  }
}

const mapStateToProps = (state: ApplicationState) => state.auth

export default connect(mapStateToProps)(AuthSignInPage)
