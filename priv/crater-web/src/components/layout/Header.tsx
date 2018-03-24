import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { pxSizes, colors, emSizes } from 'styles/variables'
import Container from './Container'
import { onEvent } from 'styles/mixins'
import { ApplicationState, ConnectedReduxProps } from 'store'

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

const HeaderNavLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const HeaderRight = styled.nav`
  padding: 0.5rem ${emSizes.containerPadding}rem;
`

type Props = ApplicationState & ConnectedReduxProps<ApplicationState>

const Header: React.SFC<Props> = ({ auth, dispatch }) => (
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
        {auth.isLoggedIn === false && <Link to="/auth/sign-in">sign in</Link>}
        {auth.isLoggedIn && (
          <React.Fragment>
            <HeaderNavLink to="/profile">
              {auth.currentUser ? auth.currentUser.username : 'profile'}
            </HeaderNavLink>
            <HeaderNavLink to="/auth/sign-out">sign out</HeaderNavLink>
          </React.Fragment>
        )}
      </HeaderRight>
    </HeaderInner>
  </StyledHeader>
)

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header)
