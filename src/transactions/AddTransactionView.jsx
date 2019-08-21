import React from 'react'
import PropTypes from 'prop-types'
import withState from '../common/store/withState'
import withActions from '../common/store/withActions'
import { creditAction } from './transactionActions'
import { compose } from '../common/Router/utils'
import useForm from 'react-hook-form'
import Error from '../common/Error'

const AddTransactionView = props => {

  const { register, handleSubmit, errors } = useForm()

  const credit = (formValues) => props.credit(
    formValues.destination,
    formValues.amount
  )
  const {accountIds} = props

  return (
    <div>

      <div>
        <h2>Add Transaction</h2>
      </div>

      <form onSubmit={handleSubmit(credit)}>
        <div>
          <input
            placeholder='Amount'
            name='amount'
            type='number'
            ref={register({required: true, min: 1})}
          />
          {
            errors.amount && <Error>
              {errors.amount.type} {errors.amount.message}
            </Error>
          }

        </div>
        <div>
          <input
            placeholder='Destination'
            type='text'
            name='destination'
            ref={register({required: true, validate: value => accountIds.includes(value) })}
          />
          {
            errors.destination && <Error>
              {
                errors.destination.type === 'validate'
                  ? 'is not a valid account'
                  : errors.destination.type
              }
              {errors.destination.message}
            </Error>
          }
        </div>
        <div>
          <button type='submit'>Execute Transaction</button>
        </div>

      </form>

    </div>
  )
}

AddTransactionView.propTypes = {
  accountIds: PropTypes.array.isRequired,
  account: PropTypes.object.isRequired,
  credit: PropTypes.func.isRequired,
}

const withAccounts = withState((state, props) => ({
  accountIds: state.accounts.entries
    .filter(a => a.id !== props.account.id)
    .map(a => a.id)
}))

const withCreditAction = withActions((dispatch, props) => {
  const {account} = props
  return {
    credit(destination, amount) {
      dispatch(creditAction.create({
        source: account.id,
        destination,
        amount,
        currency: 'CHF',
      }))
    }
  }

})

export default compose(
  withAccounts,
  withCreditAction
)(AddTransactionView)
