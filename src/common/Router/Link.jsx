import React from 'react'
import PropTypes from 'prop-types'
import router from './router'
import classes from './Link.module.css'

const go = (name, params, ev) => {
  router.navigate(name, params)
  ev.preventDefault()
}
const Link = ({href, children, name, params = {}}) => {

  const target = href ? href : router.buildUrl(name, params)
  const active = router.isActive(name, params)
  const className = [classes.link, active ? classes.active : ''].join(' ').trim()
  const onClick = ev => go(name, params, ev)

  return (
    <a href={target} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

Link.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any.isRequired,

}
export default Link
