import { Reducer } from 'redux'
import { AuthState, AuthActionTypes } from './types'

export const initialState: AuthState = {
  loading: false,
  isLoggedIn: false,
  errors: false,
  currentUser: undefined,
  token: undefined
}

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.CHECK: {
      return { ...state, loading: true }
    }
    case AuthActionTypes.SET_TOKEN_FROM_COOKIE: {
      return { ...state, token: action.payload.token }
    }
    case AuthActionTypes.SET_LOGGED_IN: {
      return {
        ...state,
        loading: false,
        isLoggedIn: action.payload.isLoggedIn,
        currentUser: action.payload.activeUser
      }
    }
    case AuthActionTypes.SET_ACTIVE_USER: {
      return { ...state, currentUser: action.payload.user }
    }
    default: {
      return state
    }
  }
}

export default reducer
