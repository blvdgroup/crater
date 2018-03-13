import React from 'react'
import styled from 'styled-components'

import Header from 'components/ui/Header'
import Footer from 'components/ui/Footer'

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

class Root extends React.Component {
  public render() {
    const { children } = this.props

    return (
      <LayoutRoot>
        <Header />
        {children}
        <Footer author="blvd" authorUrl="http://blvd.space" />
      </LayoutRoot>
    )
  }
}

export default Root
