import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import async from 'middlewares/async'
import stateValidator from 'middlewares/stateValidator'
import reducers from 'reducers'

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator) // 3rd arg applies middlewares (this one is for crud)
  )
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
