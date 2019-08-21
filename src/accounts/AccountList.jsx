import React from 'react'
import PropTypes from 'prop-types'
import AccountLi from './AccountLi'
import classes from './AccountList.module.css'
import withState from '../common/store/withState'
import List from '../common/List/List'

const AccountList = props => {
  const {accounts} = props
  return (
    <div className={classes.container}>

      <div>
        <h1>Account List</h1>
        <List
          items={accounts}
          renderItem={account =>
            <AccountLi key={account.id} account={account} />
          }
        />
      </div>

      {props.children}

    </div>
  )
}

AccountList.propTypes = {
  children: PropTypes.any,
  accounts: PropTypes.array.isRequired,
}

export default withState((state, props) => ({
  accounts: state.accounts.entries
}))(AccountList)
