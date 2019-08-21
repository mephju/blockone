import React from 'react'
import PropTypes from 'prop-types'
import classes from './List.module.css'
import Li from './Li'

const List = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.length === 0 && <Li> <i>Empty</i> </Li> }
      {props.items.map(props.renderItem)}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,

}
export default List
