import React from 'react'
import PropTypes from 'prop-types'
import classes from './Li.module.css'

const Li = ({children}) => {
  return (
    <ul className={classes.li}>
      {children}
    </ul>
  )
}

Li.propTypes = {
  children: PropTypes.any.isRequired,

}
export default Li
