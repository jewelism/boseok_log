import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainMenu from './components/MainMenu/MainMenu'
import About from './components/About/About'
import './App.css';


function Company() {
  return (
    <h2>company</h2>
  )
}
function NotFound({ location }){
  return (
    <h2>
      Page not found for {location.pathname}
    </h2>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-container">
            <div className="app-container-top-title">
              Highlight
            </div>
            <Switch>
              <Route exact path="/about" component={About} />
              <Route path="/company" component={Company} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div className="app-menuWrapper">
            <div className="app-menu-top-title">
              Boseok Log
          </div>
            <MainMenu />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
