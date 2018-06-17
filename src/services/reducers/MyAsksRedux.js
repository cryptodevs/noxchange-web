import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  saveAsk: ['ask'],
  setAsks: ['asks'],
  fetchMyAsks: [],
})

export const MyAsksTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  asks: []
})

// fetch markets // do nothing for now
export const saveAsk = (state, action) => state
export const fetchAsks = (state, action) => state

// setAsks
export const setAsks = (state, action) => {
  const { asks } = action
  let newAsks = asks.reduce((mem, val) => {
    mem[val.market] = val
    return mem
  }, {})
  return state.merge({ asks: newAsks })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_ASK]: saveAsk,
  [Types.SET_ASKS]: setAsks,
  [Types.FETCH_MY_ASKS]: fetchAsks,
})
