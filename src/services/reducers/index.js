import { combineReducers } from 'redux'
import configureStore from '../stores'
import rootSaga from '../sagas/'

export default () => {
  const rootReducer = combineReducers({
    markets: require('./AsksRedux').reducer,
    userAsks: require('./MyAsksRedux').reducer,
    users: require('./UserRedux').reducer,
    bids: require('./BidsRedux').reducer,
    userBids: require('./MyBidsRedux').reducer,
  })
  return configureStore(rootReducer, rootSaga)
}
