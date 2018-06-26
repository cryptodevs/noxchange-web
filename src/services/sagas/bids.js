import { call, put } from 'redux-saga/effects'
import BidsActions from '../reducers/BidsRedux'
import MyBidsActions from '../reducers/MyBidsRedux'

export function * saveBid (api, action) {
  const { bid } = action
  const response = yield call(api.saveBid, bid)
}

export function * myBids (api) {
  const response = yield call(api.myBids)
  yield put(MyBidsActions.setBids(response.data))
}

export function * acceptBid (api, action) {
  const { bidId } = action
  const response = yield call(api.acceptBid, bidId)
}

export function * rejectBid (api, action) {
  const { bidId } = action
  const response = yield call(api.rejectBid, bidId)
}
