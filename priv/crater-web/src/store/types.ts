import { Action } from 'redux'

/**
 * Type shims to fix broken Reducer typings in 3.7.x:
 * https://github.com/reactjs/redux/pull/2467#issuecomment-311665663
 */
export type Reducer<S, A extends Action = Action> = (state: S, action: A) => S
