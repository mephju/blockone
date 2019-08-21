import React from 'react'
import PropTypes from 'prop-types'
import Li from '../common/List/Li'

const TransactionLi = ({transaction, accountId}) => {

  const type = transaction.source === accountId
    ? 'Debit'
    : 'Credit'

  return (
    <Li>
      <div className={''}>
        {transaction.amount}
        <div>
          {new Date(transaction.createdAt).toISOString()}
        </div>
        <div>
          {type}
        </div>

        <div> {transaction.currency}</div>
        <i> {transaction.description} </i>
      </div>

    </Li>
  )
}

TransactionLi.propTypes = {
  transaction: PropTypes.object.isRequired,
  accountId: PropTypes.string.isRequired,
}
export default TransactionLi
