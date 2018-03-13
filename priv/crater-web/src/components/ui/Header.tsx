import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.SFC = () => (
  <header>
    <span>🚀 crater</span>{' '}
    <nav>
      <Link to="/">home</Link> / <Link to="/test">test</Link>
    </nav>
  </header>
)

export default Header
