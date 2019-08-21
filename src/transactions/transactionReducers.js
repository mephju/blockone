import { creditAction } from './transactionActions'
import Transaction from './Transaction'

const identity = state => state

const addTransaction = (state, action) => {
  const transaction = Transaction.create(action.payload, state.accounts.entries)
  return {
    ...state,
    transactions: {
      entries: [...state.transactions.entries, transaction]
    }
  }
}

const reducers = [
  {
    [creditAction.type]: (state, action) => {
      return addTransaction(state, action)
    }
  }

]


const transactionReducers = (state, action) => {
  return reducers.reduce((state, reducer) => {
    return (reducer[action.type] || identity)(state, action)
  }, state)
}

export default transactionReducers
