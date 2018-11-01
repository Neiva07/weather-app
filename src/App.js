import React, { Component } from 'react';
import './App.css';
import Weather from './Weather'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
          <div className="App">
            <Weather />
            <Route path="/:id" component={Company} />
          </div>
    </Router>
    );
  }
}

function Company({match}) {
    return (
        <div>
            <h2>{match.params.id}</h2>
        </div>
    )
}

export default App;
