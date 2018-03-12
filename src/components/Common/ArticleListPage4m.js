import React, { Component } from 'react'

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { getFilteredList } from './index'
import { ARTICLE_LIST, NAMES } from '../../constants'

import './ArticleListPage.css'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  fontSize: {
    fontSize: '35px',
  }
};

class ArticleListPage4m extends Component {
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
    let article_list = ARTICLE_LIST
    if (uri !== '') {
      article_list = getFilteredList(ARTICLE_LIST, uri)
    }
    // console.log(article_list)
    this.setState({ uri, article_list, title })
  }

  onClickItem = (article) => {
    // console.log(article)
    // this.props.history.push(article.category)
  }

  render() {
    const iconSize = '80px'
    const btnStyle = { width: iconSize, height: iconSize }
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          style={styles.gridList}
        >
          <Subheader style={{ fontSize: '45px', padding: '25px' }}>{this.state.title}</Subheader>
          {this.state.article_list.map((article, index) => (
            <GridTile    //titleWrap => paddingTop:15
              onClick={e => this.onClickItem(article)}
              style={{ height: '295px', backgroundColor: 'gray' }}
              subtitleStyle={styles.fontSize}
              key={index}
              titlePosition='top'
              title={<b>{article.title}</b>}
              titleBackground='gray'
              titleStyle={styles.fontSize}
              subtitle={<span>{article.date}</span>}
              actionIcon={<IconButton iconStyle={btnStyle} style={btnStyle}><StarBorder color="white" /></IconButton>}
            >
              {/* <img src={tile.img} /> */}
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default ArticleListPage4m