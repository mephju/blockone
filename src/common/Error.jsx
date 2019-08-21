import React from 'react'
import classes from './Error.module.css'

const Error = ({children}) => {
  return (
    <i className={classes.error}>{children}</i>
  )
}

export default Error
