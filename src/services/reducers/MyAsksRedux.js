import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  saveAsk: ['ask'],
})

export const MyAsksTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
})

// fetch markets // do nothing for now
export const saveAsk = (state, action) => state
export const fetchAsks = (state, action) => state

// fetchAsksOk
export const fetchAsksOk = (state, action) => {
  const { market, asks } = action
  return state.merge({ [market]: { asks } })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ASK]: saveAsk,
})
