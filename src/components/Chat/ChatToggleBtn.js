import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChatIcon from 'material-ui/svg-icons/communication/chat';

import { isMobile } from '../../utils';


function ChatToggleBtn(props) {
  const styles = {
    containerStyle: { position: 'fixed', bottom: 50, right: 50, },
    containerIconStyle: isMobile() ? { width: 120, height: 120 } : {},
    chatIconStyle: isMobile() ? { width: 80, height: 80, padding: 20 } : {}
  };
  return (
    <FloatingActionButton onClick={props.onClickChatToggleBtn} style={styles.containerStyle} iconStyle={styles.containerIconStyle}>
      <ChatIcon style={styles.chatIconStyle} />
    </FloatingActionButton>
  );
}

export default ChatToggleBtn;