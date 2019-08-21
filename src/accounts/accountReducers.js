import { creditAction } from '../transactions/transactionActions'

const identity = state => state

const replaceAccounts = (allAccounts, ...newAccounts) => {
  return allAccounts.map(a => newAccounts.find(a2 => a.id === a2.id) || a)
}

const updateAccountCredit = (state, action) => {

  const sourceAccount = { ...state.accounts.entries.find(a => a.id === action.payload.source)}
  const destinationAccount = { ...state.accounts.entries.find(a => a.id === action.payload.destination)}
  sourceAccount.credit -= action.payload.amount
  destinationAccount.credit += action.payload.amount

  return {
    ...state,
    accounts: {
      ...state.accounts,
      entries: replaceAccounts(
        state.accounts.entries,
        sourceAccount,
        destinationAccount
      )
    }
  }
}

const reducers = [
  {
    [creditAction.type]: (state, action) => {
      // debugger
      return updateAccountCredit(state, action)
    }
  }

]


const accountReducers = (state, action) => {
  return reducers.reduce((state, reducer) => {
    return (reducer[action.type] || identity)(state, action)
  }, state)
}

export default accountReducers
