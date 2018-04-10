import { ActionCreator, Action } from 'redux'
import { AuthActionTypes, UserInfo, AuthState } from './types'
import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'react-redux'
import axios, { AxiosError } from 'axios'

export const checkAuth: ActionCreator<ThunkAction<Promise<Action>, AuthState, {}>> = () => {
  return async (dispatch: Dispatch<AuthState>) => {
    dispatch({ type: AuthActionTypes.CHECK })

    try {
      const res = await axios.get('/api/v1/users/me')
      const { data } = res.data

      dispatch(setLoggedIn(true))
      return dispatch(setActiveUser(data))
    } catch (e) {
      const err = e as AxiosError
      return dispatch(authError(err.message))
    }
  }
}

export const setTokenFromCookie = (token: string) => ({
  type: AuthActionTypes.SET_TOKEN_FROM_COOKIE,
  payload: {
    token
  }
})

export const setLoggedIn = (isLoggedIn: boolean) => ({
  type: AuthActionTypes.SET_LOGGED_IN,
  payload: {
    isLoggedIn
  }
})

export const authError = (message: string) => ({
  type: AuthActionTypes.ERROR,
  payload: {
    message
  }
})

export const setActiveUser = (user: UserInfo) => ({
  type: AuthActionTypes.SET_ACTIVE_USER,
  payload: {
    user
  }
})
