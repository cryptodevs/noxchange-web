import { call, put } from 'redux-saga/effects'
import AsksActions from '../reducers/AsksRedux'

export function * fetchAsks (api, action) {
  const { market } = action
  const response = yield call(api.market, market)
  yield put(AsksActions.fetchAsksOk(market, response.data))
}
