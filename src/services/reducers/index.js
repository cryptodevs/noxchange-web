import { combineReducers } from 'redux'
import configureStore from '../stores'
import rootSaga from '../sagas/'

export default () => {
  const rootReducer = combineReducers({
    markets: require('./AsksRedux').reducer,
    userAsks: require('./MyAsksRedux').reducer,
  })
  return configureStore(rootReducer, rootSaga)
}
