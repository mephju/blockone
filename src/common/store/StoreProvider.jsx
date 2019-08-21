import React, {useReducer, useEffect} from 'react'
import {context} from './store'
import reducer from './reducer'
import initialState from './initialState'
import initStore from './initStore'

const {Provider} = context

const StoreProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  state.dispatch = dispatch
  useEffect(() => {
    initStore(dispatch)
  })


  return <Provider value={state}>
    {children}
  </Provider>
}

export default StoreProvider

