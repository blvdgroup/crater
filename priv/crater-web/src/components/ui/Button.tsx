import * as React from 'react'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { Link } from 'react-router-dom'

import { fonts, colors } from '../../styles/variables'
import { onEvent } from '../../styles/mixins'

interface ButtonProps {
  id?: string
  className?: string
  kind?: 'button' | 'link' | 'nav-link'
  color?: 'primary' | 'white'
  size?: 'sm' | 'md' | 'lg'
  type?: string
  href?: string
  to?: string
  target?: string
  rel?: string
  disabled?: boolean
  onClick?: () => void
}

const theme = {
  primary: colors.blue,
  white: colors.white
}

const Button: React.SFC<ButtonProps> = ({
  id,
  className,
  color,
  kind,
  type,
  href,
  to,
  onClick,
  target,
  rel,
  disabled,
  children
}) => {
  if (kind === 'button') {
    return (
      <button id={id} className={className} onClick={onClick} type={type} disabled={disabled}>
        {children}
      </button>
    )
  } else if (kind === 'nav-link' && to) {
    return (
      <Link id={id} className={className} to={to}>
        {children}
      </Link>
    )
  } else {
    return (
      <a id={id} className={className} href={href} target={target}>
        {children}
      </a>
    )
  }
}

export default styled(Button)`
  display: inline-block;
  padding: ${props => (props.size === 'lg' ? '.5rem 1rem' : '.25rem .5rem')};
  background: transparent;
  color: ${props => (props.color ? theme[props.color] : colors.grey)};
  border: 2px solid ${props => (props.color ? theme[props.color] : colors.grey)};
  font-family: ${fonts.monospace};
  text-align: center;
  cursor: pointer;

  ${onEvent`
    background-color: ${transparentize(0.9, colors.grey)};
    text-decoration: none;
  `} ${props =>
    props.size === 'sm'
      ? css`
          font-size: 85%;
        `
      : ''};
`
