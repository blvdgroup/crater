import React from 'react'
import axios from 'axios'
import AuthSignInForm from '../../components/auth/AuthSignInForm'

interface AuthSignInPageState {
  formState: {
    username: string
    password: string
  }
}

export default class AuthSignInPage extends React.Component<{}, AuthSignInPageState> {
  public render() {
    return (
      <div>
        <h1>AuthSignInPage</h1>
        <AuthSignInForm onFormFinished={this.handleFormFinished} />
      </div>
    )
  }

  private handleFormFinished = () => {
    console.log('onFormFinished')
  }
}
