import * as React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import styled from 'styled-components'

import { colors, emSizes } from 'styles/variables'
import { onEvent } from 'styles/mixins'
import { ApplicationState } from 'store'
import { signOut } from 'store/auth/actions'
import { AuthState } from 'store/auth/types'
import LogoutLink from '../auth/LogoutLink'

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

const StyledLogoutLink = styled(LogoutLink)`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const HeaderRight = styled.nav`
  padding: 0.5rem ${emSizes.containerPadding}rem;
`

interface PropsFromState {
  auth: AuthState
}

interface PropsFromDispatch {
  logOut: () => any
}

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps<{}>

class Header extends React.Component<Props> {
  public handleLogout = () => {
    this.props.logOut()
    this.props.history.push('/auth')
  }

  public render() {
    const { auth } = this.props

    return (
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
            {auth.isLoggedIn === true ? (
              <React.Fragment>
                <HeaderNavLink to="/profile">
                  {auth.currentUser ? auth.currentUser.username : 'profile'}
                </HeaderNavLink>
                <StyledLogoutLink loading={auth.loading} onClick={() => this.handleLogout()}>
                  sign out
                </StyledLogoutLink>
              </React.Fragment>
            ) : (
              <Link to="/auth/sign-in">sign in</Link>
            )}
          </HeaderRight>
        </HeaderInner>
      </StyledHeader>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logOut: () => dispatch(signOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
