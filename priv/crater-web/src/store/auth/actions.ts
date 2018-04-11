import { ActionCreator, Action } from 'redux'
import { AuthActionTypes, UserInfo, AuthState } from './types'
import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'react-redux'
import axios, { AxiosError } from 'axios'
import * as Cookies from 'js-cookie'

export const checkAuth = () => {
  return async (dispatch: Dispatch<AuthState>) => {
    dispatch({ type: AuthActionTypes.CHECK })

    try {
      const res = await axios.get('/api/v1/users/me')
      const { data } = res.data

      return dispatch(checkAuthComplete(true, data))
    } catch (e) {
      return dispatch(setLoggedIn(false))
    }
  }
}

export const checkAuthComplete = (isAuthenticated: boolean, user?: UserInfo) => {
  return (dispatch: Dispatch<AuthState>) => {
    if (isAuthenticated && user) {
      dispatch(setLoggedIn(true))
      dispatch(setActiveUser(user))
    } else {
      dispatch(setLoggedIn(false))
    }
    return dispatch({ type: AuthActionTypes.CHECK_COMPLETE })
  }
}

export const signOut = () => {
  return (dispatch: Dispatch<AuthState>) => {
    dispatch({ type: AuthActionTypes.LOGOUT_REQUEST })
    Cookies.remove('token')

    dispatch(setLoggedIn(false))
    dispatch({ type: AuthActionTypes.REMOVE_ACTIVE_USER })
    return dispatch({ type: AuthActionTypes.LOGOUT_REQUEST_COMPLETE })
  }
}

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
