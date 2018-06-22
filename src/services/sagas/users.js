import { call, put } from 'redux-saga/effects'
import UserActions from '../reducers/UserRedux'

export function * registerUser (api, action) {
  const { user } = action
  yield call(api.registerUser, user)
}

export function * fetchToken (api, action) {
  const { user } = action  
  const response = yield call(api.getToken, user)
  api.internal.setHeader('Authorization', `Token ${response.data.token}`)
  if(response.ok === true)
    yield put(UserActions.loginSucceeded())
  else
    yield put(UserActions.loginFailed())
}