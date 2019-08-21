import React from 'react'
import {useStore} from './store'

const withState = (mapState) => (Child) => {
  return function WithState(props) {
    const state = useStore()
    const newProps = mapState(state, props)

    return <Child {...props} {...newProps} />
  }
}

export default withState
