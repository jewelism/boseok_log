import React, { Component } from 'react';

import socketIOClient from 'socket.io-client';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import SendIcon from 'material-ui/svg-icons/content/send';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, routes4m, RouteWithSubRoutes } from './routes';
import MainMenu from './components/MainMenu/MainMenu';
import MainMenu4m from './components/MainMenu/MainMenu4m';
import './utils/moment_config';
import './App.css';

import { isMobile } from './utils';
import { getUserIp } from './actions'

const AppTitle = 'Boseok Log';

const NotFoundPage = ({ location }) => {
  return (
    <h1>
      <center>
        Page not found {location.pathname}
      </center>
    </h1>
  );
};

const socket = socketIOClient("boseok.me:3000");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      chatInput: '',
      userTextColor: '#272727',
      chatIsOpen: false,
    };
  }

  handleSendBtn = (event) => {
    socket.emit('chat', this.state.chatInput);
    this.setState({ messageList: [...this.state.messageList, this.state.chatInput], chatInput: "" });
    event.preventDefault();
  }

  handleChatInput = (e) => {
    if (e.target.value.length < 25) {
      this.setState({ chatInput: e.target.value });
    }
  }

  ChatToggleBtn = () => {
    const containerStyle = { position: 'fixed', bottom: 50, right: 50, };
    const containerIconStyle = isMobile() ? { width: 120, height: 120 } : {};
    const chatIconStyle = isMobile() ? { width: 80, height: 80, padding: 20 } : {};
    return (
      <FloatingActionButton onClick={this.onClickChatToggleBtn} style={containerStyle} iconStyle={containerIconStyle}>
        <ChatIcon style={chatIconStyle} />
      </FloatingActionButton>
    );
  }

  onClickChatToggleBtn = () => {
    this.setState({ chatIsOpen: !this.state.chatIsOpen });
  }

  Chat = () => {
    const containerStyle = {
      position: 'fixed',
      bottom: isMobile() ? 200 : 140,
      right: isMobile() ? 80 : 50,
      backgroundColor: '#F0F0F0',
      width: isMobile() ? 500 : 400, height: isMobile() ? 600 : 400,
      display: 'flex',
      // flexWrap: 'wrap',
      flexDirection: 'column',
      opacity: 0.8,
      borderRadius: 15,

    };
    const titleStyle = { display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: isMobile() ? 35 : 19, paddingTop: 15 };
    const messageContainerStyle = {
      height: '72%',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      fontSize: isMobile() ? 30 : 15,
      overflowY: 'scroll',
      overflowX: 'hidden',
    };
    const formStyle = { position: 'absolute', bottom: 10, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' };
    const chatInputStyle = { width: '75%', borderRadius: 10, padding: '1.5%', marginRight: '2%', fontSize: isMobile() ? 35 : 16 };
    const sendBtnStyle = { width: '15%', borderRadius: 10, padding: isMobile() ? '3%' : '0.5%' };
    return (
      <Paper zDepth={3} style={containerStyle}>
        <div style={titleStyle}>
          익명 채팅
        </div>
        <div style={messageContainerStyle} ref={(el) => { this.messagesEnd = el; }}>
          {this.state.messageList.map((msg, index) => <div key={index} style={{ color: this.state.userTextColor }}>{msg}</div>)}
        </div>
        <form onSubmit={this.handleSendBtn} style={formStyle}>
          <input onChange={this.handleChatInput} value={this.state.chatInput} style={chatInputStyle} autoFocus />
          <button type="submit" style={sendBtnStyle}><SendIcon /></button>
        </form>
      </Paper>
    );
  }

  scrollToBottom = () => {
    if(this.state.chatIsOpen){
      // use window.scrollTo
      this.messagesEnd.scrollIntoView();
    }
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    this.scrollToBottom();
    try {
      getUserIp()
        .then((data) => {
          if (data.ip && data.ip.substr) {
            const ipArr = data.ip.split(".");
            const userTextColor = `#2${Math.abs(parseInt(ipArr[0], 10) + parseInt(ipArr[3], 10) - 1000)}27`;
            this.setState({ userTextColor });
          }
        })
    } catch (err) {

    }

    socket.on('chat', (data) => {
      const message = data;
      this.setState({ messageList: [...this.state.messageList, message] });
    });
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            {isMobile() ? App4m() : App4desktop()}
            {this.ChatToggleBtn()}
            {this.state.chatIsOpen && this.Chat()}
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

function App4desktop(props) {
  return (
    <div className="App">
      <div className="app-menuWrapper">
        <div className="app-menu-top-title" onClick={() => window.location.href = '/'}>
          {AppTitle}
        </div>
        <MainMenu />
      </div>
      <div className="app-container">
        <Paper zDepth={5} style={{ padding: '10px', margin: '30px' }}>
          <Switch>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            <Route component={NotFoundPage} />
          </Switch>
        </Paper>
      </div>
    </div>
  )
}

function App4m() {
  return (
    <div className="App4m">
      <div className="app4m-menuWrapper">
        <span style={{ fontSize: 45 }} onClick={() => window.location.href = '/'}>
          {AppTitle}
        </span>
        <MainMenu4m />
      </div>
      <div className="app4m-container">
        <Paper zDepth={5} style={{ padding: '10px', margin: '80px' }}>
          <Switch>
            {routes4m.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            <Route component={NotFoundPage} />
          </Switch>
        </Paper>
      </div>
    </div>
  )
}

export default App;
