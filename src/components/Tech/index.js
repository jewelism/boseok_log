import React from 'react'

import { RouteWithSubRoutes } from '../../routes'

export default function ({ routes }) {
  return routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
}