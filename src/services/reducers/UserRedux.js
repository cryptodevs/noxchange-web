import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  registerUser: ['username','email', 'password'],
  tryLogin: ['user'],
  loginSucceeded: ['isUserLoggedIn'],
  loginFailed: ['isUserLoggedIn'],
})

export const UserTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isUserLoggedIn: null
})


export const registerUser = (state, action) => state

export const tryLogin = (state, action) => state

export const loginSucceeded = (state, action) => state.merge({ isUserLoggedIn: true })

export const loginFailed = (state, action) => state.merge({ isUserLoggedIn: false })


export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_USER]: registerUser,
  [Types.TRY_LOGIN]: tryLogin,
  [Types.LOGIN_SUCCEEDED]: loginSucceeded,
  [Types.LOGIN_FAILED]: loginFailed,
})
