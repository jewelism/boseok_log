import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes, RouteWithSubRoutes } from './routes'
import MainMenu from './components/MainMenu/MainMenu'
import './App.css';

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
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <div className="app-container">
              <Paper zDepth={3} style={{ marginBottom: '15px', padding: '10px' }}>
                <div className="app-container-top-title">
                  highlight
                </div>
              </Paper>
              <Paper zDepth={5} style={{ padding: '10px' }}>
                <Switch>
                  {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                  <Route component={NotFoundPage} />
                </Switch>
              </Paper>
            </div>
            <div className="app-menuWrapper">
              <div className="app-menu-top-title">
                Boseok Log
              </div>
              <MainMenu />
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
