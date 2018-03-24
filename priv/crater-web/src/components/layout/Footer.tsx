import * as React from 'react'
import styled from 'styled-components'

import { emSizes } from 'styles/variables'

interface FooterProps {
  className?: string
  author: string
  authorUrl: string
}

const Footer: React.SFC<FooterProps> = ({ className, author, authorUrl }) => (
  <footer className={className}>
    copyright lololol &middot; made with &hearts; by <a href={authorUrl}>{author}</a>.
  </footer>
)

export default styled(Footer)`
  padding: 0.5rem ${emSizes.containerPadding}rem;
  font-size: 90%;
`
