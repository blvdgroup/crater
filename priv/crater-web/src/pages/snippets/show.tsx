import React from 'react'
import { RouteComponentProps } from 'react-router'

import Page from 'components/layout/Page'

interface ShowSnippetPageProps {
  snippets: any[]
}

interface RouteProps {
  id: string
}

type AllProps = RouteComponentProps<RouteProps> & ShowSnippetPageProps

export default class ShowSnippetPage extends React.Component<AllProps> {
  public render() {
    const { match } = this.props
    const { params } = match
    return <Page>ShowSnippetPage {params.id}</Page>
  }
}
