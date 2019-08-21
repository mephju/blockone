import React, {Component} from 'react'
import router, {routeMap} from './router'

const renderRoute = ([Component, ...components]) =>
  React.createElement(
    Component,
    {},
    components.length ? renderRoute(components) : null
  )


class Router extends Component {

  constructor(props) {
    super(props)

    this.state = {
      route: null,
      previousRoute: null,
    }
  }

  componentDidMount() {
    this.unsubscribe = router.subscribe((transition) => {
      this.setState({ ...transition })
    })
    router.start()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const {route} = this.state

    if(!route) {
      return null
    }

    const { components } = routeMap[route.name]


    return <div>
      {renderRoute(components)}
    </div>

  }
}

export default Router
