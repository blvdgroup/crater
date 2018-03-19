import { Reducer } from 'store/types'
import { AuthState, AuthActions, AuthActionTypes } from './types'

export const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
  token: undefined
}

const reducer: Reducer<AuthState, AuthActions> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_TOKEN_FROM_COOKIE: {
      return { ...state, token: action.payload.token }
    }
    case AuthActionTypes.LOGIN_REQUEST_SUCCESS: {
      return { ...state, user: action.payload.user, token: action.payload.token }
    }
    default: {
      return state
    }
  }
}
