import { combineReducers, Dispatch, Reducer } from 'redux'
import { routerReducer } from 'react-router-redux'

// The top-level state object
// tslint:disable-next-line:no-empty-interface
export interface ApplicationState {}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<S> {
  dispatch: Dispatch<S>
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  router: routerReducer
})
