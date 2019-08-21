import React from 'react'
import PropTypes from 'prop-types'
import withState from '../common/store/withState'
import List from '../common/List/List'
import TransactionLi from './TransactionLi'
import router from '../common/Router/router'
const TransactionList = props => {

  const {transactions, accountId} = props

  return (
    <div>
      <div>
        <h1>Transactions</h1>
      </div>
      <List
        items={transactions}
        renderItem={transaction =>
          <TransactionLi
            key={transaction.id}
            transaction={transaction}
            accountId={accountId}
          />
        }
      />
      {props.children}
    </div>
  )
}

TransactionList.propTypes = {
  accountId: PropTypes.string.isRequired,
}

export default withState((state, props) => {
  const id = router.getState().params.id
  return {
    transactions: state.transactions.entries.filter(
      t => t.destination === id || t.source === id
    )
  }
})(TransactionList)
