import React, { Component } from 'react'

import { NAMES } from '../../constants'
import ArticleList from '../Common/ArticleList'
import './ArticleListPage.css'

class ArticleListPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article_list: [],
      title: null,
    }
  }

  componentDidMount() {
    const { pathname } = this.props.location
    let uri = pathname.substr(pathname.lastIndexOf('/') + 1, pathname.length)
    let title = NAMES[uri]
    if (uri === 'highlight') {
      uri = 'tech'
      title = 'See All'
    } else if (uri === '') {
      title = '최근 게시물'
    }

    // const article_list = ARTICLE_LIST.filter((article) => {
    //   return article.category === uri
    // })
    this.setState({ uri, title })
  }

  onClickItem = (item) => {
    // this.props.history.push(item.category)
    // console.log(this.props)
    // console.log(item.category)
  }

  render() {
    return (
      <div className="alp-container">
        <span className="alp-title">{this.state.title}</span>
        <div className="alp-table">
          <ArticleList category={this.state.uri} onClickItem={this.onClickItem} />
        </div>
      </div>
    )
  }
}

export default ArticleListPage