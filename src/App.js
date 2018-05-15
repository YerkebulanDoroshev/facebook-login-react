import React, { Component } from 'react';
import './App.css';

import Facebook from './components/Facebook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, login to Facebook
        </p>
        <Facebook />
      </div>
    );
  }
}

export default App;
