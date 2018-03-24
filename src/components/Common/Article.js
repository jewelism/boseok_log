import React from 'react'

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

  return (
    <Dialog
      title={props.item.title}
      modal={false}
      // actions={actions}
      open={props.open}
      onRequestClose={props.handleClose}
      autoScrollBodyContent={true}
      titleStyle={{ fontSize: props.forMobile ? 45 : 17 }}
      bodyStyle={{ fontSize: props.forMobile ? 35 : 15 }}
      contentStyle={{ width: '60%' }}
    >
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