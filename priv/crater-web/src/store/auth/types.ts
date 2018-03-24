import { Action } from 'redux'

// State

export interface AuthState {
  isLoggedIn: boolean
  currentUser?: UserInfo
  token?: string
  errors?: boolean
}

// Action Types

export const enum AuthActionTypes {
  SET_TOKEN_FROM_COOKIE = '@@auth/SET_TOKEN_FROM_COOKIE',
  SET_ACTIVE_USER = '@@auth/SET_ACTIVE_USER',
  SET_LOGGED_IN = '@@auth/SET_LOGGED_IN',
  LOGIN_REQUEST_FAILURE = '@@auth/LOGIN_REQUEST_FAILURE'
}

export interface SetTokenFromCookieAction extends Action {
  type: AuthActionTypes.SET_TOKEN_FROM_COOKIE
  payload: {
    token: string
  }
}

export interface SetActiveUserAction extends Action {
  type: AuthActionTypes.SET_ACTIVE_USER
  payload: {
    user: UserInfo
  }
}

export interface SetLoggedInAction extends Action {
  type: AuthActionTypes.SET_LOGGED_IN
  payload: {
    isLoggedIn: boolean
  }
}

export interface LoginRequestFailureAction extends Action {
  type: AuthActionTypes.LOGIN_REQUEST_FAILURE
}

// Action Union Type

export type AuthActions = SetTokenFromCookieAction | SetLoggedInAction

// Other Types

export interface UserInfo {
  id: string
  username: string
}

export interface AuthError {
  error: boolean
  message?: string
}
