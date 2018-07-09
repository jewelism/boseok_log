import React from 'react';
import moment from 'moment';
import Dialog from 'material-ui/Dialog';
import {getImagePath} from '../../utils';

const styles = {
  row: {display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 35},
  hidden: {color: '#FFF'},
  date: {display: 'flex', fontWeight: 'bold', justifyContent: 'flex-end'},
  whiteSpace: {marginRight: 5},
  imageStyle: {width: '80%', height: '80%'},
};

function Article(props) {
  const {item} = props;
  const date = item.date ? item.date : new Date();
  const isMobile = props.forMobile;
  const images = item.images ? JSON.parse(item.images) : [];
  return (
    <Dialog
      title={props.item.title}
      modal={false}
      // actions={actions}
      open={props.open}
      onRequestClose={props.handleClose}
      autoScrollBodyContent={true}
      titleStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: isMobile ? 38 : 20,
        padding: isMobile ? 50 : 20
      }}
      bodyStyle={{fontSize: isMobile ? 30 : 15}}
      contentStyle={{width: isMobile ? '77%' : '60%', minWidth: isMobile ? null : 700}}
    >
      <div style={styles.row}>
        <div style={styles.hidden}>
          {props.item.id}
        </div>
        <div style={styles.date}>
          {moment(date).format("LLL")}
        </div>
      </div>
      {props.item.content && props.item.content.split('\n').map((content, index) => {
        return (
          <div key={`content_${index}`}>
            {content.split(' ').map((c, i) => {
              return (
                <span style={styles.whiteSpace} key={i}>{`${c} `}</span>
              )
            })}<br/>
          </div>
        )
      })}
      {images.map(image => {
        return <img src={getImagePath(image.filename)} key={image.filename} alt={'이미지'} style={styles.imageStyle}/>;
      })}
    </Dialog>
  );
}

export default Article