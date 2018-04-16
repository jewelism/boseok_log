import React, { PureComponent } from 'react';

import Paper from 'material-ui/Paper';
import SendIcon from 'material-ui/svg-icons/content/send';
import InfoIcon from 'material-ui/svg-icons/action/info';
import Snackbar from 'material-ui/Snackbar';
import socketIOClient from 'socket.io-client';

import ChatToggleBtn from './ChatToggleBtn';
import { isMobile } from '../../utils';
import { getUserIp, getChats, saveChats } from '../../actions';

const socket = socketIOClient("https://boseok.me:3443");

const containerHeight = isMobile() ? 700 : 400;
const formHeight = isMobile() ? 50 : 30;
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(39, 39, 39, 0.2)',
  },
  containerStyle: {
    position: 'fixed',
    bottom: isMobile() ? 200 : 140,
    right: isMobile() ? 80 : 50,
    backgroundColor: '#F0F0F0',
    width: isMobile() ? '65%' : 400, height: containerHeight,
    display: 'flex',
    flexDirection: 'column',
    opacity: 0.98,
    borderRadius: 15,
  },
  titleStyle: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    fontWeight: 'bold', fontSize: isMobile() ? 35 : 19, paddingTop: 15
  },
  infoIconStyle: isMobile() ? { width: 40, height: 40 } : { width: 25, height: 25 },
  infoTooltip: { position: 'absolute', top: 50, fontSize: isMobile() ? 20 : 10, color: '#FFF', backgroundColor: 'black', padding: 5 },
  messageContainerStyle: {
    height: isMobile() ? 560 : 300, paddingTop: 20, paddingLeft: 20, paddingRight: 20,
    fontSize: isMobile() ? 30 : 15, overflowY: 'scroll', overflowX: 'hidden',
  },
  formStyle: {
    position: 'absolute', bottom: 10, width: '100%', height: formHeight,
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  chatInputStyle: { width: '75%', height: '82%', borderRadius: 10, marginRight: '2%', paddingLeft: 5, fontSize: isMobile() ? 35 : 16 },
  sendBtnStyle: { width: '15%', height: '100%', borderRadius: 10 },
  sendBtnDisabledStyle: { width: '15%', height: '100%', borderRadius: 10, backgroundColor: 'red' },
  myMsgStyle: { color: '#4158FF', display: 'flex', justifyContent: 'flex-end', marginBottom: 5 },
  anonymousMsgStyle: { display: 'flex', justifyContent: 'flex-start', marginBottom: 5 }
};

const UserInfo = navigator.userAgent; //Determine whether you sent me a chat or someone else

class Chat extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      chatIsOpen: false,
      chatInput: '',
      dbMsgList: [],
      messageList: [],
      userTextColor: '#272727',
      snackbarIsOpen: false,
      isChatInfoOpen: false,
      disableChatSubmit: false,
    };
    this.chatCount = 0;
    this.chatObserveTimer = null;
  }

  componentDidMount() {
    this.scrollToBottom();
    getChats() //get chatting logs in DB
      .then(dbMsgList => this.setState({ dbMsgList }));

    getUserIp() //user ip => user chat text color
      .then((data) => {
        if (data.ip && data.ip.substr) {
          const ipArr = data.ip.split(".");
          const userTextColor = `#2${Math.abs(parseInt(ipArr[0], 10) + parseInt(ipArr[3], 10) - 1000)}27`;
          this.setState({ userTextColor });
        }
      });

    socket.on('chat', (data) => {
      // console.log(socket.id);
      const message = data;
      this.setState({ messageList: [...this.state.messageList, message] }); //append message obj
      if (!this.state.chatIsOpen) {
        this.setState({ snackbarIsOpen: true }); //new message arrived alert
      }
    });
  }

  scrollToBottom = () => {
    if (this.state.chatIsOpen) {
      this.messagesEnd.scrollTop = this.messagesEnd.scrollHeight;
    }
  }

  componentDidUpdate() {
    if (this.state.disableChatSubmit) { //if chat submit button disabled
      if (!this.chatObserveTimer) { //if no timer
        this.chatObserveTimer = setTimeout(() => { //set timer
          this.chatCount = 0;
          this.setState({ disableChatSubmit: false }); //free
          this.chatObserveTimer = null; //clear timer
        }, 2000);
      }
    }
    this.scrollToBottom();
  }

  handleChatInput = (e) => {
    if (e.target.value.length < 25) { //max 24 chars
      this.setState({ chatInput: e.target.value });
    }
  }

  handleSendBtn = (event) => {
    this.chatCount++;
    if (this.chatCount > 5) { //blocking too many chat request => during componentDidUpdate timer's second, over 5 request
      this.setState({ disableChatSubmit: true });
      event.preventDefault();
      return false;
    }
    const { chatInput: text } = this.state; //const text = this.state.chatInput
    if (text.trim()) { //remove blank and if not blank
      saveChats(UserInfo, text); //call save chat api
      socket.emit('chat', { author: UserInfo, text, time: Date.now() });  //defined socket data object
      this.setState({ messageList: [...this.state.messageList, { author: UserInfo, text, time: Date.now() }], chatInput: "" });
    }
    this.chatInputRef.focus();
    event.preventDefault();
  }

  handleSnackbarRequestClose = () => this.setState({ snackbarIsOpen: false });

  onClickChatToggleBtn = () => this.setState({ chatIsOpen: !this.state.chatIsOpen });

  renderMsgList = () => { //chat message list
    return (
      <div>
        {this.state.dbMsgList.map(this.msgListCallback)}
        {this.state.messageList.map(this.msgListCallback)}
      </div>
    );
  }

  msgListCallback = (msg, index) => { //chat message list map callback function
    if (msg.author === UserInfo) {
      return (
        <div key={index} style={styles.myMsgStyle}>
          <MsgText text={msg.text} />
        </div>
      );
    }
    return (
      <div key={index} style={Object.assign({}, styles.anonymousMsgStyle, { color: this.state.userTextColor })}>
        <MsgText text={msg.text} />
      </div>
    );
  }

  stopPropagation = e => e.stopPropagation(); //Prevent events from being delivered to parents(?)

  toggleChatInfo = () => this.setState({ isChatInfoOpen: !this.state.isChatInfoOpen });

  render() {
    return (
      <div style={this.state.chatIsOpen ? styles.overlay : {}} onClick={this.onClickChatToggleBtn}> {/* overlay */}
        {this.state.chatIsOpen &&
          <Paper zDepth={3} style={styles.containerStyle} onClick={this.stopPropagation}>
            <div style={styles.titleStyle}>
              익명 채팅 <InfoIcon onMouseOver={this.toggleChatInfo} onMouseOut={this.toggleChatInfo} style={styles.infoIconStyle} />
              {this.state.isChatInfoOpen && //tooltip
                <div style={styles.infoTooltip}>
                  브라우저의 환경이 같다면 같은 유저로 판단합니다 ^^;<br />
                  추후 변경 될 수 있습니다!
                </div>
              }
            </div>
            <div style={styles.messageContainerStyle} ref={(el) => { this.messagesEnd = el; }}>
              {this.renderMsgList()}
            </div>
            <form onSubmit={this.handleSendBtn} style={styles.formStyle}> {/* message input form */}
              <input
                ref={(el) => { this.chatInputRef = el; }}
                onChange={this.handleChatInput}
                value={this.state.chatInput}
                style={styles.chatInputStyle}
                autoFocus
              />
              <button type="submit" style={this.state.disableChatSubmit ? styles.sendBtnDisabledStyle : styles.sendBtnStyle} disabled={this.state.disableChatSubmit}><SendIcon /></button>
            </form>
          </Paper>
        }
        <Snackbar
          open={this.state.snackbarIsOpen}
          message="새로운 채팅메시지가 왔어요!"
          autoHideDuration={4000}
          onRequestClose={this.handleSnackbarRequestClose}
          contentStyle={{ display: 'flex', justifyContent: 'center' }}
        />
        <ChatToggleBtn onClickChatToggleBtn={this.onClickChatToggleBtn} />
      </div>
    );
  }
}

function MsgText(props) {
  return (
    <div style={{ backgroundColor: '#FFF', padding: 5, paddingRight: 10, paddingLeft: 10, borderRadius: 5 }}>{props.text}</div>
  );
}

export default Chat;