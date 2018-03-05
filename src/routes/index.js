import React from 'react'
import { Route } from "react-router-dom";

import { TECH_ITEMS, TECH_PREFIX, LATEST_URI, ABOUT_URI, HIGHLIGHT_URI, MYAPPS_URI } from '../constants'

import LatestListPage from '../components/Latest/LatestListPage'
import AboutPage from '../components/About/AboutPage'
import TechIndex from '../components/Tech'
import TechHighlightPage from '../components/Tech/TechHighlightPage'
import TechListPage from '../components/Tech/TechListPage'
import MyAppPage from '../components/MyApp/MyAppPage'

export const routes = [
  {
    path: LATEST_URI,
    component: LatestListPage,
    exact: true,
  },
  {
    path: ABOUT_URI,
    component: AboutPage
  },
  {
    path: TECH_PREFIX,
    component: TechIndex,
    routes: [
      {
        path: HIGHLIGHT_URI,
        component: TechHighlightPage
      },
      ...TECH_ITEMS.map((tech) => {
        return { path: tech.uri, component: TechListPage }
      })
    ]
  },
  {
    path: MYAPPS_URI,
    component: MyAppPage,
  }
];

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);