import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Input extends Component {

  constructor(props) {
    super(props)

    this.state = {value: props.value}
  }

  onChange(ev) {

    debugger
    const value = ev.target
    this.setState({value})
  }

  render() {
    return (
      <label>
        {this.props.label}
        <input value={this.state.value} />

      </label>
    )

  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
export default Input
