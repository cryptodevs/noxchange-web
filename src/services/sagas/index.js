import { takeLatest, all } from 'redux-saga/effects'
import API from '../sources/api'
import { AsksTypes } from '../reducers/AsksRedux'
import { MyAsksTypes } from '../reducers/MyAsksRedux'
import { UserTypes } from '../reducers/UserRedux'
import { BidsTypes } from '../reducers/BidsRedux'
import { MyBidsTypes } from '../reducers/MyBidsRedux'
import { fetchAsks, saveAsk, myAsks } from './asks'
import { fetchToken, registerUser } from './users'
import { saveBid, myBids } from './bids'

const api = API.create()

export default function * root () {
  yield all([
    takeLatest(AsksTypes.FETCH_ASKS, fetchAsks, api),
    takeLatest(MyAsksTypes.SAVE_ASK, saveAsk, api),
    takeLatest(MyAsksTypes.FETCH_MY_ASKS, myAsks, api),
    takeLatest(UserTypes.REGISTER_USER, registerUser, api),
    takeLatest(UserTypes.TRY_LOGIN, fetchToken, api),
    takeLatest(BidsTypes.SAVE_BID, saveBid, api),
    takeLatest(MyBidsTypes.FETCH_MY_BIDS, myBids, api),
  ])
}
