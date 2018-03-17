import React from 'react'
import { RouteComponentProps } from 'react-router'

import Page from 'components/layout/Page'

interface ShowSnippetPageProps {
  snippets: any[]
}

interface RouteParams {
  id: string
}

type AllProps = RouteComponentProps<RouteParams> & ShowSnippetPageProps

export default class ShowSnippetPage extends React.Component<AllProps> {
  public render() {
    const { match } = this.props
    const { params } = match
    return <Page>ShowSnippetPage {params.id}</Page>
  }
}
