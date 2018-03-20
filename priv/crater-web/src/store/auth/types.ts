import { Action } from 'redux'

// State

export interface AuthState {
  isLoggedIn: boolean
  user?: UserInfo
  token?: string
  errors?: boolean
}

// Action Types

export const enum AuthActionTypes {
  SET_TOKEN_FROM_COOKIE = '@@auth/SET_TOKEN_FROM_COOKIE',
  LOGIN_REQUEST_SUCCESS = '@@auth/LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE = '@@auth/LOGIN_REQUEST_FAILURE'
}

export interface SetTokenFromCookieAction extends Action {
  type: AuthActionTypes.SET_TOKEN_FROM_COOKIE
  payload: {
    token: string
  }
}

export interface LoginRequestSuccessAction extends Action {
  type: AuthActionTypes.LOGIN_REQUEST_SUCCESS
  payload: {
    user: UserInfo
    token: string
  }
}

export interface LoginRequestFailureAction extends Action {
  type: AuthActionTypes.LOGIN_REQUEST_FAILURE
}

// Action Union Type

export type AuthActions = SetTokenFromCookieAction | LoginRequestSuccessAction

// Other Types

export interface UserInfo {
  id: string
  username: string
}

export interface AuthError {
  error: boolean
  message?: string
}
