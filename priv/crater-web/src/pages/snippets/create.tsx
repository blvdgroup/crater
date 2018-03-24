import * as React from 'react'

import Page from 'components/layout/Page'
import CreateSnippetForm from 'components/snippets/CreateSnippetForm'

export default class CreateSnippetPage extends React.Component {
  public render() {
    return (
      <Page>
        <h1>CreateSnippetPage</h1>
        <CreateSnippetForm />
      </Page>
    )
  }
}
