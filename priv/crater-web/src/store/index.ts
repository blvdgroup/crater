import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux'
import { fork, all } from 'redux-saga/effects'

import { AuthState } from './auth/types'
import authReducer from './auth/reducer'
import authFlowSaga from './auth/sagas'

// The top-level state object
// tslint:disable-next-line:no-empty-interface
export interface ApplicationState {
  auth: AuthState
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action<any> = AnyAction> {
  dispatch: Dispatch<A>
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<ApplicationState> = combineReducers({
  auth: authReducer
})

export function* sagas() {
  yield all([yield fork(authFlowSaga)])
}
