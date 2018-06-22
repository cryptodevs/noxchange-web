import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  setBids: ['bids'],
  fetchMyBids: [],
})

export const MyBidsTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  bids: []
})

export const fetchMyBids = (state, action) => state

// setBids
export const setBids = (state, action) => {
  const { bids } = action
  return state.merge({ bids })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_BIDS]: setBids,
  [Types.FETCH_MY_BIDS]: fetchMyBids,
})
