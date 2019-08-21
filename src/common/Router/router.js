import router5 from 'router5'
import browserPlugin from 'router5-plugin-browser'
import routeNames from './routeNames'
import AccountList from '../../accounts/AccountList'
import AccountDetails from '../../accounts/AccountDetails'
import { toPartialNames } from './utils'
import Home from '../../home/Home'
import Page from '../Page'

const routes = [
  { name: routeNames.privateRoot, path: '/', Component: Page },
  { name: routeNames.home, path: '/', Component: Home },
  { name: routeNames.accounts, path: 'accounts', Component: AccountList},
  { name: routeNames.accountDetails, path: '/:id', Component: AccountDetails },
  { name: 'public', path: '/public', children: [] },
]



export const routeMap = routes.reduce((acc, route) => {
  const partialNames = toPartialNames(route.name)
  acc[route.name] = {}
  acc[route.name].Component = route.Component
  acc[route.name].components = partialNames.map(
    partialName => acc[partialName].Component
  )
  return acc
}, {})


const router = router5(routes)
router.usePlugin(browserPlugin())

export default router
