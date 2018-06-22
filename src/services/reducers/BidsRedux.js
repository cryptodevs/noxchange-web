import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  saveBid: ['bid'],
})

export const BidsTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
})

// do nothing for now
export const saveBid = (state, action) => state

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_BID]: saveBid,
})
