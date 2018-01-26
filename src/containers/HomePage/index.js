import React, { Component } from 'react';

import Header from '../../components/Header/index.js';

class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
        <Header
          title='HomePage'
        />
      </div>
    );
  }
}

export default HomePage;