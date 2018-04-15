import React, { PureComponent } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes, routes4m, RouteWithSubRoutes } from './routes';
import MainMenu from './components/MainMenu/MainMenu';
import MainMenu4m from './components/MainMenu/MainMenu4m';
import Chat from './components/Chat/Chat'
import './utils/moment_config';
import './App.css';

import { isMobile } from './utils';

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

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile()
    };
  }

  toggleView = () => {
    this.setState({ isMobile: !this.state.isMobile });
  }

  renderApp = () => {
    const { isMobile } = this.state;
    const className = isMobile ? '4m' : '';
    const MENU = isMobile ? MainMenu4m : MainMenu;
    const ROUTES = isMobile ? routes4m : routes;
    return (
      <div className={`App${className}`}>
        <div className={`app${className}-menuWrapper`}>
          <div className={`app${className}-menu-top-title`} onClick={() => window.location.href = '/'}>
            {AppTitle}
          </div>
          <MENU toggleView={this.toggleView} />
        </div>
        <div className={`app${className}-container`}>
          <Paper zDepth={5} className={`app${className}-paper`}>
            <Switch>
              {ROUTES.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
              <Route component={NotFoundPage} />
            </Switch>
          </Paper>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            {this.renderApp()}
            <Chat />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
