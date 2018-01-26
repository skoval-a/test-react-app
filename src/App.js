import React, { Component } from 'react';
import './assets/style/App.css';
import HomePage from "./containers/HomePage/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
