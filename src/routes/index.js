import React from 'react'
import { Route } from "react-router-dom";

import { TECH_ITEMS, TECH_PREFIX, LATEST_URI, ABOUT_URI, HIGHLIGHT_URI, MYAPPS_URI, KNOWLEDGE_URI, TALK_URI } from '../constants'

import AboutPage from '../components/About/AboutPage'
import TechIndex from '../components/Tech'
import ArticleListPage from '../components/Article/ArticleListPage'
import MyAppPage from '../components/MyApp/MyAppPage'
import WriteArticle from '../components/WriteArticle/WriteAritcle';

export * from './routes4m'

export const routes = [
  {
    path: LATEST_URI,
    component: ArticleListPage,
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
        component: ArticleListPage
      },
      ...TECH_ITEMS.map((tech) => {
        return { path: tech.uri, component: ArticleListPage }
      })
    ]
  },
  {
    path: MYAPPS_URI,
    component: MyAppPage,
  },
  {
    path: KNOWLEDGE_URI,
    component: ArticleListPage,
  },
  {
    path: TALK_URI,
    component: ArticleListPage,
  },
  {
    path: '/post',
    component: WriteArticle
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