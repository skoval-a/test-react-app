import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './assets/style/App.css';

import Header from './components/Header';
import HomePage from "./containers/HomePage/index";
import About from "./containers/About/index";

class App extends Component {
  render() {
    const navList = [
      {
        name: 'Home',
      },
      {
        name: 'About',
      },
      {
        name: 'Contact',
      },
    ];
    return (
      <Router>
        <div className='App'>
          <Header
            showLogo
            title='HomePage'
            navList={navList}
            handleClick={this.handleClickHeader}
          />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
