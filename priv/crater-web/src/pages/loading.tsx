import * as React from 'react'
import * as Loadable from 'react-loadable'

import Page from 'components/layout/Page'

const LoadingPage: React.SFC<Loadable.LoadingComponentProps> = () => <Page>loading...</Page>

export default LoadingPage
