import * as React from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { colors } from 'styles/variables'

interface LogoutLinkProps {
  className?: string
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const LogoutLink: React.SFC<LogoutLinkProps> = ({ className, onClick, children }) => (
  <a className={className} onClick={onClick}>
    {children}
  </a>
)

export default styled(LogoutLink)`
  cursor: pointer;

  ${props =>
    props.loading
      ? css`
          cursor: default;
          color: ${darken(0.4, colors.white)};

          &:hover,
          &:focus {
            text-decoration: none;
          }
        `
      : ''};
`
