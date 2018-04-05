import React, { Component } from 'react';

import socketIOClient from 'socket.io-client';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

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
      userTextColor: '#272727'
    };
  }

  componentDidMount() {
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
      console.log(data);
      this.setState({ messageList: [...this.state.messageList, message] });
    });
  }

  handleSendBtn = (event) => {
    socket.emit('chat', this.state.chatInput);
    this.setState({ messageList: [...this.state.messageList, this.state.chatInput] });
    event.preventDefault();
  }

  handleChatInput = (e) => {
    this.setState({ chatInput: e.target.value })
  }

  Chat = () => {
    return (
      <div>
        <form onSubmit={this.handleSendBtn}>
          <input onChange={this.handleChatInput} />
          <input type="submit" value="send" />
        </form>
        {this.state.messageList.map((msg, index) => {
          return (
            <div key={index} style={{ color: this.state.userTextColor }}>{msg}</div>
          )
        })}
      </div>
    );
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          {isMobile() ? App4m() : App4desktop()}
          {this.Chat()}
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
