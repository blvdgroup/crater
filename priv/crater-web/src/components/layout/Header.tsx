import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { pxSizes, colors, emSizes } from 'styles/variables'
import Container from './Container'
import { onEvent } from 'styles/mixins'

const StyledHeader = styled.header`
  border-bottom: 1px solid ${colors.greyBorder};
  border-collapse: collapse;
`

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`

const HeaderLeft = styled.div`
  flex: 1;
  padding: 0.5rem ${emSizes.containerPadding}rem;
  border-right: 1px solid ${colors.greyBorder};
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`

const HeaderTitleLink = styled(Link)`
  ${onEvent`
    text-decoration: none;

    span {
      text-decoration: underline;
    }
  `};
`

const HeaderRight = styled.nav`
  padding: 0.5rem ${emSizes.containerPadding}rem;
`

const Header: React.SFC = () => (
  <StyledHeader>
    <HeaderInner>
      <HeaderLeft>
        <HeaderTitle>
          <HeaderTitleLink to="/">
            🚀 <span>crater</span>
          </HeaderTitleLink>
        </HeaderTitle>
      </HeaderLeft>
      <HeaderRight>
        <Link to="/auth/sign-in">sign in</Link>
      </HeaderRight>
    </HeaderInner>
  </StyledHeader>
)

export default Header
