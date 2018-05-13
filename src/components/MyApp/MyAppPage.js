import React from 'react'
import './MyAppPage.css'

import { PORTFOLIO_LIST } from '../../constants'

function PortfolioItem(props) {
  return (
    <div className="my-app-page-item">
      <div><a href={props.item.uri}>{props.item.display}</a></div>
      <div className="my-app-page-discription">{props.item.discription}</div>
    </div>
  )
}

function MyAppPage() {
  return (
    <div className="my-app-page-container">
      <h2>Boseok Applications</h2>
      <div>참고 - boseok.me는 react.js로 구현</div>
      <br />
      <div className="my-app-page-item-wrapper">
        {PORTFOLIO_LIST.map((item, index) => {
          return <PortfolioItem item={item} key={index}/>
        })}
      </div>
    </div>
  )
}

export default MyAppPage