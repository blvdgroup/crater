import React from 'react'
import Header from 'components/ui/Header'

class Root extends React.Component {
  public render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}

export default Root
