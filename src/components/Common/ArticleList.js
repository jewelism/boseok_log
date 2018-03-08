import React from 'react'

import { ARTICLE_LIST } from '../../constants'
import { JS, REACT, CLOUD, MAC, NAMES } from '../../constants'
import './ArticleList.css'

function filteredList(article_list = ARTICLE_LIST, category) {
  if (category) {
    return article_list.filter((article) => {
      if (category === 'tech') {
        const tech = [JS, REACT, CLOUD, MAC]
        let flag = false
        // eslint-disable-next-line
        tech.map((item) => {
          if (item === article.category)
            flag = true
        })
        return flag
      } else {
        return article.category === category
      }
    })
  } else {
    return article_list
  }
}

function ArticleList(props) {
  return (
    <div>
      {filteredList(props.list, props.category).map((article, index) => {
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