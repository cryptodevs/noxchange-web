import { takeLatest, all } from 'redux-saga/effects'
import API from '../sources/api'
import { AsksTypes } from '../reducers/AsksRedux'
import { MyAsksTypes } from '../reducers/MyAsksRedux'
import { fetchAsks, saveAsk, myAsks } from './asks'

const api = API.create()

export default function * root () {
  yield all([
    takeLatest(AsksTypes.FETCH_ASKS, fetchAsks, api),
    takeLatest(MyAsksTypes.SAVE_ASK, saveAsk, api),
    takeLatest(MyAsksTypes.FETCH_MY_ASKS, myAsks, api),
  ])
}
