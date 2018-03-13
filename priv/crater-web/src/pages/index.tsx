import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage: React.SFC = () => (
  <div>
    this is index.html <Link to="/test">test page</Link>
  </div>
)

export default IndexPage
