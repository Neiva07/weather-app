import React, { Component } from 'react';
import './App.css';
import Weather from './Weather'
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
          <div className="App">
            <Weather />
          </div>
    </Router>
    );
  }
}


export default App;
