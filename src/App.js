import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes, routes4m, RouteWithSubRoutes } from './routes'
import MainMenu from './components/MainMenu/MainMenu'
import MainMenu4m from './components/MainMenu/MainMenu4m'
import './App.css';

const AppTitle = 'Boseok Log'

const NotFoundPage = ({ location }) => {
  return (
    <h1>
      <center>
        Page not found {location.pathname}
      </center>
    </h1>
  )
}

class App extends Component {
  render() {
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return (
      <Router>
        <MuiThemeProvider>
          {isMobile() ? App4m() : App4desktop()}
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
