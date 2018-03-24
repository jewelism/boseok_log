import React from 'react'

import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import { PORTFOLIO_LIST } from '../../constants'

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

function MyAppPage4m() {
  return (
    <div style={styles.root}>
      <GridList
        cellHeight={300}
        style={styles.gridList}
      >
        <Subheader style={{ fontSize: '45px', padding: '25px' }}>Boseok Web Applications</Subheader>
        {PORTFOLIO_LIST.map((pf, index) => (
          <GridTile
            onClick={e => window.location.href = pf.uri}
            style={{ height: '295px', backgroundColor: 'gray' }}
            subtitleStyle={styles.fontSize}
            key={index}
            titlePosition='top'
            title={<b>{pf.display}</b>}
            titleBackground='gray'
            titleStyle={styles.fontSize}
            // subtitle={<span>{article.date}</span>}
            // actionIcon={<IconButton iconStyle={btnStyle} style={btnStyle}><StarBorder color="white" /></IconButton>}
          >
            {/* <img src={tile.img} /> */}
          </GridTile>
        ))}
      </GridList>
    </div>
  )
}

export default MyAppPage4m