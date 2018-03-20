import { ActionCreator } from 'redux'
import {
  SetTokenFromCookieAction,
  AuthActionTypes,
  LoginRequestSuccessAction,
  UserInfo
} from './types'

export const setTokenFromCookie: ActionCreator<SetTokenFromCookieAction> = (token: string) => ({
  type: AuthActionTypes.SET_TOKEN_FROM_COOKIE,
  payload: {
    token
  }
})

export const loginRequestSuccess: ActionCreator<LoginRequestSuccessAction> = (
  user: UserInfo,
  token: string
) => ({
  type: AuthActionTypes.LOGIN_REQUEST_SUCCESS,
  payload: {
    token,
    user
  }
})
