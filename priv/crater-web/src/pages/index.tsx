import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Container from 'components/layout/Container'
import Page from 'components/layout/Page'

const HomepageWidget = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const IndexPage: React.SFC = () => (
  <Page>
    <HomepageWidget size="xl">
      <h1>welcome to crater</h1>
      <p className="lead">show your coding skills. let others rate your code snippets.</p>
    </HomepageWidget>
  </Page>
)

export default IndexPage
