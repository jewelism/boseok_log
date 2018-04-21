import React from 'react';

import moment from 'moment';
import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';

const styles = {
  date: { display: 'flex', marginTop: 20, marginBottom: 35, fontWeight: 'bold', justifyContent: 'flex-end' },
  whiteSpace: { marginRight: 5 },
};

function Article(props) {
  // const actions = [
  //   <FlatButton
  //     label="닫기"
  //     labelStyle={{ fontSize }}
  //     primary={true}
  //     onClick={props.handleClose}
  //     keyboardFocused={true}
  //   />,
  // ];
  const date = props.item.date ? props.item.date : new Date();
  const isMobile = props.forMobile;
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
      bodyStyle={{ fontSize: isMobile ? 30 : 15 }}
      contentStyle={{ width: isMobile ? '77%' : '60%' }}
    >
      <div style={styles.date}>
        {moment(date).format("LLL")}
      </div>
      {props.item.content && props.item.content.split("\n").map((content, index) => {
        return (
          <div key={index}>
            {content.split(" ").map((c, i) => {
              return (
                <span style={styles.whiteSpace} key={i}>{`${c} `}</span>
              )
            })}<br />
          </div>
        )
      })}
    </Dialog>
  )
}

export default Article