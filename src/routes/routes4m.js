
import { TECH_ITEMS, TECH_PREFIX, LATEST_URI, ABOUT_URI, HIGHLIGHT_URI, MYAPPS_URI, KNOWLEDGE_URI, TALK_URI } from '../constants'

import TechIndex from '../components/Tech'

import AboutPage4m from '../components/About/AboutPage4m'
import MyAppPage4m from '../components/MyApp/MyAppPage4m'
import ArticleListPage4m from '../components/Common/ArticleListPage4m'


export const routes4m = [
  {
    path: LATEST_URI,
    component: ArticleListPage4m,
    exact: true,
  },
  {
    path: ABOUT_URI,
    component: AboutPage4m
  },
  {
    path: TECH_PREFIX,
    component: TechIndex,
    routes: [
      {
        path: HIGHLIGHT_URI,
        component: ArticleListPage4m
      },
      ...TECH_ITEMS.map((tech) => {
        return { path: tech.uri, component: ArticleListPage4m }
      })
    ]
  },
  {
    path: MYAPPS_URI,
    component: MyAppPage4m,
  },
  {
    path: KNOWLEDGE_URI,
    component: ArticleListPage4m,
  },
  {
    path: TALK_URI,
    component: ArticleListPage4m,
  },
]