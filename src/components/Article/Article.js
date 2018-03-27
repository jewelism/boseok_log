import React from 'react'

import moment from 'moment'
import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';

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

  const date = props.item.date ? props.item.date : new Date()
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
        fontSize: props.forMobile ? 42 : 20,
        padding: props.forMobile ? 50 : 20,
      }}
      bodyStyle={{
        fontSize: props.forMobile ? 30 : 15,
      }}
      contentStyle={{ width: '60%' }}
    >
      <div style={{ display: 'flex', marginBottom: 10, fontWeight: 'bold', justifyContent: 'flex-end' }}>
        {moment(date).format("LLL")}
      </div>
      {props.item.content && props.item.content.split('\n').map((content, index) => {
        return (
          <div key={index}>
            {content}<br />
          </div>
        )
      })}
    </Dialog>
  )
}

export default Article