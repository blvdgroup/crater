import { ActionCreator } from 'redux'
import { SetTokenFromCookieAction, AuthActionTypes } from './types'

export const setTokenFromCookie: ActionCreator<SetTokenFromCookieAction> = (token: string) => ({
  type: AuthActionTypes.SET_TOKEN_FROM_COOKIE,
  payload: {
    token
  }
})
