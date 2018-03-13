import React from 'react'
import axios from 'axios'

import AuthSignInForm from 'components/auth/AuthSignInForm'
import Page from 'components/ui/Page'

interface AuthSignInPageState {
  formState: {
    username: string
    password: string
  }
}

export default class AuthSignInPage extends React.Component<{}, AuthSignInPageState> {
  public render() {
    return (
      <Page>
        <AuthSignInForm onFormFinished={this.handleFormFinished} />
      </Page>
    )
  }

  private handleFormFinished = () => {
    console.log('onFormFinished')
  }
}
