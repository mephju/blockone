import React from 'react'
import PropTypes from 'prop-types'
import classes from './AccountLi.module.css'
import Link from '../common/Router/Link'
import routeNames from '../common/Router/routeNames'
import Li from '../common/List/Li'

const AccountLi = ({account}) => {

  return (
    <Li className={classes.accountLi}>
      <Link name={routeNames.accountDetails} params={{id: account.id}}>
        {account.id}
      </Link> - {account.holder}

      <div className={classes.credit}>
        {account.credit}
      </div>

    </Li>
  )
}

AccountLi.propTypes = {
  account: PropTypes.object.isRequired,
}
export default AccountLi
