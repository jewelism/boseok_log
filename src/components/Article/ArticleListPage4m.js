import React, { PureComponent } from 'react';

import moment from 'moment';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import { getArticlePageInfo } from './index';
import Article from './Article';

import './ArticleListPage.css';

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
  },
  subtitle: {
    position: 'absolute',
    top: 70,
    fontSize: '35px',
  }
};

class ArticleListPage4m extends PureComponent {
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
    const { pathname } = this.props.location;
    const { uri, title, article_list } = await getArticlePageInfo(pathname)
    this.setState({ uri, title, article_list });
  }

  onClickItem = article => this.setState({ showArticle: true, selectedArticle: article })

  closeArticle = () => this.setState({ showArticle: false })

  render() {
    // const iconSize = '80px'
    // const btnStyle = { width: iconSize, height: iconSize }
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={300}
          style={styles.gridList}
        >
          <Subheader style={{ fontSize: '40px', padding: '25px' }}>{this.state.title}</Subheader>
          {this.state.article_list.map((article, index) => (
            <GridTile    //titleWrap => paddingTop:15
              onClick={e => this.onClickItem(article)}
              style={{ height: '295px', backgroundColor: 'gray' }}
              key={index}
              titlePosition='top'
              title={<b>{article.title}</b>}
              titleBackground='gray'
              titleStyle={styles.fontSize}
              subtitle={<span>{moment(article.date).fromNow()}</span>}
              subtitleStyle={styles.subtitle}
            // actionIcon={<IconButton iconStyle={btnStyle} style={btnStyle}><StarBorder color="white" /></IconButton>}
            >
              {/* <img src={tile.img} /> */}
            </GridTile>
          ))}
        </GridList>
        <Article forMobile item={this.state.selectedArticle} open={this.state.showArticle} handleClose={this.closeArticle} />
      </div>
    )
  }
}

export default ArticleListPage4m