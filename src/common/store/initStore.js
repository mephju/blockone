import { creditAction } from '../../transactions/transactionActions'
import Transaction from '../../transactions/Transaction'

const entries = [
  Transaction.createFromParams('A0001', 'A0002', 1000, 'CHF'),
  Transaction.createFromParams('A0002', 'A0001', 2000, 'CHF'),
  Transaction.createFromParams('A0003', 'A0002', 11000, 'CHF'),
  Transaction.createFromParams('A0004', 'A0002', 991000, 'CHF'),

  Transaction.createFromParams('A0001', 'A0003', 5000, 'CHF'),
  Transaction.createFromParams('A0002', 'A0001', 1000, 'CHF'),
  Transaction.createFromParams('A0003', 'A0001', 191000, 'CHF'),
  Transaction.createFromParams('A0004', 'A0001', 41000, 'CHF'),

  Transaction.createFromParams('A0001', 'A0003', 100, 'CHF'),
  Transaction.createFromParams('A0002', 'A0003', 200, 'CHF'),
  Transaction.createFromParams('A0003', 'A0004', 1000, 'CHF'),
  Transaction.createFromParams('A0004', 'A0003', 9000, 'CHF'),

  Transaction.createFromParams('A0001', 'A0004', 10034530, 'CHF'),
  Transaction.createFromParams('A0002', 'A0004', 24434000, 'CHF'),
  Transaction.createFromParams('A0003', 'A0004', 111111000, 'CHF'),
  Transaction.createFromParams('A0004', 'A0001', 99991000, 'CHF'),
]

let done = false


const initStore = (dispatch) => {
  setTimeout(() => {
    if(done) {
      return
    }
    done = true
    entries.forEach(transaction => {
      dispatch({ ...creditAction.create(transaction)})
    })
  }, 1000)
}

export default initStore
