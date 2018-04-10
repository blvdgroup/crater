import { Action } from 'redux'

// State

export interface AuthState {
  loading: boolean
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
  CHECK = '@@auth/CHECK',
  LOGIN_REQUEST_FAILURE = '@@auth/LOGIN_REQUEST_FAILURE'
}

// Other Types

export interface UserInfo {
  id: string
  username: string
}

export interface AuthError {
  error: boolean
  message?: string
}
