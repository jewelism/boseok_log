import React, { Component } from 'react'

// import Dialog from 'material-ui/Dialog';

import { NAMES } from '../../constants'
import ArticleList from './ArticleList'
import Article from './Article'

import './ArticleListPage.css'

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

    this.setState({ uri, title })
  }

  onClickItem = (item) => {
    // this.props.history.push(item.category)
    // console.log(this.props)
    // console.log(item.category)
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
          <ArticleList category={this.state.uri} onClickItem={this.onClickItem} />
        </div>
        <Article item={this.state.selectedArticle} open={this.state.showArticle} handleClose={this.closeArticle}/>
      </div>
    )
  }
}

export default ArticleListPage