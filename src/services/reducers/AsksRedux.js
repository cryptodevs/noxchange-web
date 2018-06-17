import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  fetchAsks: ['market'],
  fetchAsksOk: ['market', 'asks'],
})

export const AsksTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
})

// fetch markets // do nothing for now
export const fetchAsks = (state, action) => state

// fetchAsksOk
export const fetchAsksOk = (state, action) => {
  const { market, asks } = action
  return state.merge({ [market]: { asks } })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_ASKS]: fetchAsks,
  [Types.FETCH_ASKS_OK]: fetchAsksOk,
})
