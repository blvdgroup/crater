import { Reducer } from 'redux'
import { AuthState, AuthActionTypes } from './types'

export const initialState: AuthState = {
  loading: false,
  isLoggedIn: false,
  error: undefined,
  currentUser: undefined,
  token: undefined
}

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.CHECK: {
      return { ...state, loading: true }
    }
    case AuthActionTypes.CHECK_COMPLETE: {
      return { ...state, loading: false }
    }
    case AuthActionTypes.LOGOUT_REQUEST: {
      return { ...state, loading: true }
    }
    case AuthActionTypes.LOGOUT_REQUEST_COMPLETE: {
      return { ...state, loading: false }
    }
    case AuthActionTypes.SET_TOKEN_FROM_COOKIE: {
      return { ...state, token: action.payload.token }
    }
    case AuthActionTypes.ERROR: {
      return { ...state, error: action.payload.error }
    }
    case AuthActionTypes.SET_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      }
    }
    case AuthActionTypes.SET_ACTIVE_USER: {
      return { ...state, currentUser: action.payload.user }
    }
    case AuthActionTypes.REMOVE_ACTIVE_USER: {
      return { ...state, currentUser: undefined }
    }
    default: {
      return state
    }
  }
}

export default reducer
