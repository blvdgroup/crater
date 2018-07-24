import { AuthActionTypes, UserInfo } from './types'

export const checkAuth = () => ({ type: AuthActionTypes.CHECK })

export const checkAuthComplete = (isAuthenticated: boolean, user?: UserInfo) => ({
  type: AuthActionTypes.CHECK_COMPLETE,
  payload: { isAuthenticated, user }
})

export const signOut = () => ({ type: AuthActionTypes.LOGOUT_REQUEST })

export const setTokenFromCookie = (token: string) => ({
  type: AuthActionTypes.SET_TOKEN_FROM_COOKIE,
  payload: {
    token
  }
})

export const authError = (error: string) => ({
  type: AuthActionTypes.ERROR,
  payload: {
    error
  }
})

export const setLoggedIn = (isLoggedIn: boolean) => ({
  type: AuthActionTypes.SET_LOGGED_IN,
  payload: {
    isLoggedIn
  }
})

export const setActiveUser = (user: UserInfo) => ({
  type: AuthActionTypes.SET_ACTIVE_USER,
  payload: {
    user
  }
})
