import React from 'react'
import './MyAppPage.css'

import { PORTFOLIO_LIST } from '../../constants'

function MyAppPage() {
  return (
    <div className="my-app-page-container">
      <h2>Boseok Web Applications</h2>
      <div>참고 - boseok.me는 react.js로 구현됨</div>
      <br/>
      <div className="my-app-page-item-wrapper">
        {PORTFOLIO_LIST.map((item, index) => {
          return (
            <div className="my-app-page-item" key={index}>
              <div><a href={item.uri}>{item.display}</a></div>
              <div className="my-app-page-discription">{item.discription}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyAppPage