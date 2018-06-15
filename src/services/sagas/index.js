import { takeLatest, all } from 'redux-saga/effects'
import API from '../sources/api'
import { AsksTypes } from '../reducers/AsksRedux'
import { fetchAsks } from './asks'

const api = API.create()

export default function * root () {
  yield all([
    takeLatest(AsksTypes.FETCH_ASKS, fetchAsks, api),
  ])
}
