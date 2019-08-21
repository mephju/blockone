import React from 'react'
import PropTypes from 'prop-types'
import withState from '../common/store/withState'
import router from '../common/Router/router'
import AccountLi from './AccountLi'
import TransactionList from '../transactions/TransactionList'
import AddTransactionView from '../transactions/AddTransactionView'
import classes from './AccountDetails.module.css'


const AccountDetails = props => {
  const {account} = props
  return (
    <div>
      <h1>Account Details</h1>
      <div>
        <div className={classes.row}>
          <AccountLi account={account} />
          <AddTransactionView account={account} />

        </div>
        <TransactionList accountId={account.id} />
      </div>
    </div>
  )
}
AccountDetails.propTypes = {
  account: PropTypes.object.isRequired,
}

export default withState((state, props) => ({
  account: state.accounts.entries.find(a => a.id === router.getState().params.id)
}))(AccountDetails)
