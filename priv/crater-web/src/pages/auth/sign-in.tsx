import React from 'react'
import axios from 'axios'

import AuthSignInForm from 'components/auth/AuthSignInForm'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'

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
        <Container size="md">
          <AuthSignInForm onFormFinished={this.handleFormFinished} />
        </Container>
      </Page>
    )
  }

  private handleFormFinished = () => {
    console.log('onFormFinished')
  }
}
