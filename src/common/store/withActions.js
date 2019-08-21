import React from 'react'
import {useStore} from './store'

const withActions = (mapDispatch) => (Child) => {
  return function WithActions(props) {
    const {dispatch} = useStore()
    const newProps = mapDispatch(dispatch, props)

    return <Child {...props} {...newProps} />
  }
}

export default withActions
