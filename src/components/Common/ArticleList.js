import React from 'react'
import { NAMES } from '../../constants'
import './ArticleList.css'

import { getFilteredList } from './index'

function ArticleList(props) {
  return (
    <div>
      {getFilteredList(props.list, props.category).map((article, index) => {
        return (
          <div
            onClick={() => props.onClickItem(article)}
            className="article-list-table-tr" key={index}
          >
            <span>
              <span className="article-list-table-td-id">{index + 1}.</span>
              <span className="article-list-table-td">{NAMES[article.category]}</span>
              <span className="article-list-table-td">-</span>
              <span className="article-list-table-td">{article.title}</span>
            </span>
            <div className="article-list-table-td">{article.date}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ArticleList