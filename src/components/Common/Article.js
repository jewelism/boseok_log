import React from 'react'

import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';

function Article(props) {
  const titleFontSize = props.forMobile ? 45 : 17
  const fontSize = props.forMobile ? 35 : 15

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
      titleStyle={{ fontSize: titleFontSize }}
      bodyStyle={{ fontSize }}
    // contentStyle={{fontSize:100}}
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