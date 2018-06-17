import { call, put } from 'redux-saga/effects'
import AsksActions from '../reducers/AsksRedux'
import MyAsksActions from '../reducers/MyAsksRedux'

export function * fetchAsks (api, action) {
  const { market } = action
  const response = yield call(api.market, market)
  yield put(AsksActions.fetchAsksOk(market, response.data))
}

export function * saveAsk (api, action) {
  const { ask } = action
  const response = yield call(api.saveAsk, ask)
}

export function * myAsks (api) {
  const response = yield call(api.myAsks)
  yield put(MyAsksActions.setAsks(response.data))
}
