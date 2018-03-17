import React from 'react'
import { RouteComponentProps } from 'react-router'

import Page from 'components/layout/Page'

interface EditSnippetPageProps {
  snippets: any[]
}

interface RouteParams {
  id: string
}

type AllProps = RouteComponentProps<RouteParams> & EditSnippetPageProps

export default class EditSnippetPage extends React.Component<AllProps> {
  public render() {
    const { match } = this.props
    const { params } = match
    return <Page>EditSnippetPage {params.id}</Page>
  }
}
