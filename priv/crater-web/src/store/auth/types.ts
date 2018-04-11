import { Action } from 'redux'

// State

export interface AuthState {
  loading: boolean
  isLoggedIn: boolean
  currentUser?: UserInfo
  token?: string
  error?: string
}

// Action Types

export const enum AuthActionTypes {
  SET_TOKEN_FROM_COOKIE = '@@auth/SET_TOKEN_FROM_COOKIE',
  SET_ACTIVE_USER = '@@auth/SET_ACTIVE_USER',
  SET_LOGGED_IN = '@@auth/SET_LOGGED_IN',
  REMOVE_ACTIVE_USER = '@@auth/REMOVE_ACTIVE_USER',
  ERROR = '@@auth/ERROR',
  CHECK = '@@auth/CHECK',
  CHECK_COMPLETE = '@@auth/CHECK_COMPLETE',
  LOGOUT_REQUEST = '@@auth/LOGOUT_REQUEST',
  LOGOUT_REQUEST_COMPLETE = '@@auth/LOGOUT_REQUEST_COMPLETE',
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
