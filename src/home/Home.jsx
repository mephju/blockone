import React from 'react'
import Link from '../common/Router/Link'
import routeNames from '../common/Router/routeNames'

const Home = (props) => {
  return (
    <div>
      <Link name={routeNames.accounts}>
        <h1>
          Go to accounts
        </h1>
      </Link>
    </div>
  )
}

Home.propTypes = {
  // dialog: PropTypes.object.isRequired,
}
export default Home
