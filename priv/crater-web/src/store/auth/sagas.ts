import axios, { AxiosResponse } from 'axios'
import * as Cookies from 'js-cookie'
import { AnyAction } from 'redux'
import { call, put, takeLatest } from 'redux-saga/effects'
import { AuthActionTypes } from './types'
import { setLoggedIn, setActiveUser, checkAuthComplete } from './actions'

function* validateAuth() {
  try {
    const { data }: AxiosResponse = yield call(axios.get, '/api/v1/users/me')
    yield put(checkAuthComplete(true, data.data))
  } catch (e) {
    yield put(setLoggedIn(false))
  }
}

function* doAuthComplete({ payload }: AnyAction) {
  const { isAuthenticated, user } = payload

  if (isAuthenticated && user) {
    yield put(setLoggedIn(true))
    yield put(setActiveUser(user))
  } else {
    yield put(setLoggedIn(false))
  }
}

function* doLogout() {
  Cookies.remove('token')

  yield put(setLoggedIn(false))
  yield put({ type: AuthActionTypes.REMOVE_ACTIVE_USER })
  yield put({ type: AuthActionTypes.LOGOUT_REQUEST_COMPLETE })
}

function* authFlowSaga() {
  yield takeLatest(AuthActionTypes.CHECK, validateAuth)
  yield takeLatest(AuthActionTypes.CHECK_COMPLETE, doAuthComplete)
  yield takeLatest(AuthActionTypes.LOGOUT_REQUEST, doLogout)
}

export default authFlowSaga
