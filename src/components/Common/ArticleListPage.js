import React, { Component } from 'react'

// import Dialog from 'material-ui/Dialog';

import { NAMES } from '../../constants'
import Article from './Article'
import { getFilteredList } from './index'

import './ArticleListPage.css'
import './ArticleList.css'

class ArticleListPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article_list: [],
      title: null,
      showArticle: false,
      selectedArticle: {},
    }
  }

  async componentDidMount() {
    const { pathname } = this.props.location
    let uri = pathname.substr(pathname.lastIndexOf('/') + 1, pathname.length)
    let title = NAMES[uri]
    if (uri === 'highlight') {
      uri = 'tech'
      title = 'See All'
    } else if (uri === '') {
      title = '최근 게시물'
    }
    const article_list = await getFilteredList(null, uri) || []
    this.setState({ uri, title, article_list })
  }

  onClickItem = (item) => {
    this.setState({ showArticle: true, selectedArticle: item })
  }

  closeArticle = () => {
    this.setState({ showArticle: false })
  }

  render() {
    return (
      <div className="alp-container">
        <span className="alp-title">{this.state.title}</span>
        <div className="alp-table">
          <div>
            {this.state.article_list.map((article, index) => {
              return (
                <div
                  onClick={() => this.onClickItem(article)}
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
        </div>
        <Article item={this.state.selectedArticle} open={this.state.showArticle} handleClose={this.closeArticle} />
      </div>
    )
  }
}

export default ArticleListPage