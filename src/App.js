import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainMenu from './components/MainMenu/MainMenu'
import './App.css';

function About() {
  return (
    <h2>About</h2>
  )
}
function Company() {
  return (
    <h2>company</h2>
  )
}
function User({ match }) {
  return (
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="container-top-title">
              Highlight
            </div>

            <Switch>
              <Route exact path="/about" component={About} />
              <Route path="/company" component={Company} />
              <Route path="/:user" component={User} />
            </Switch>
          </div>
          <div className="menuWrapper">
            <div className="menu-top-title">
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
