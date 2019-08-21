import transactionReducers from '../../transactions/transactionReducers'
import accountReducers from '../../accounts/accountReducers'

const reducers = [
  transactionReducers,
  accountReducers,
]

const reducer = (state, action) => {

  const newState = reducers.reduce((state, reducer) => reducer(state, action), state)

  if(state === newState) {
    throw new Error('action not found')
  }

  return newState

}

export default reducer
