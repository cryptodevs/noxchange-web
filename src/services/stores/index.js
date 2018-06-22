import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

// creates the store
export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  middleware.push(sagaMiddleware)
  enhancers.push(applyMiddleware(...middleware))
  const store = createStore(rootReducer, composeEnhancers(...enhancers))
  sagaMiddleware.run(rootSaga)
  return store
}
