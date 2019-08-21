import React from 'react'
import PropTypes from 'prop-types'
import classes from './Page.module.css'

const Page = (props) => {
  return (
    <div className={classes.page}>
      {props.children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
}
export default Page
