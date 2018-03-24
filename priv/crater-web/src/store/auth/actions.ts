import { ActionCreator } from 'redux'
import {
  SetTokenFromCookieAction,
  AuthActionTypes,
  SetLoggedInAction,
  UserInfo,
  SetActiveUserAction
} from './types'

export const setTokenFromCookie: ActionCreator<SetTokenFromCookieAction> = (token: string) => ({
  type: AuthActionTypes.SET_TOKEN_FROM_COOKIE,
  payload: {
    token
  }
})

export const setLoggedIn: ActionCreator<SetLoggedInAction> = (isLoggedIn: boolean) => ({
  type: AuthActionTypes.SET_LOGGED_IN,
  payload: {
    isLoggedIn
  }
})

export const setActiveUser: ActionCreator<SetActiveUserAction> = (user: UserInfo) => ({
  type: AuthActionTypes.SET_ACTIVE_USER,
  payload: {
    user
  }
})
