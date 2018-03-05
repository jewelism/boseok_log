import React from 'react'

import { PORTFOLIO_LIST } from '../../constants'

import './MyAppPage.css'
const prefix = "myapp/"
function MyAppPage() {
  return (
    <div className="my-app-page-container">
      <h2>My Web Applications</h2>
      <div className="my-app-page-item-wrapper">
        {PORTFOLIO_LIST.map((item, index) => {
          return (
            <div className="my-app-page-item" key={index}>
              <a href={prefix + item.uri}>{item.display}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyAppPage