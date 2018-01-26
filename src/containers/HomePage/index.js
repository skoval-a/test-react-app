import React, { Component } from 'react';

import Header from '../../components/Header/index.js';

class HomePage extends Component {

  handleClickHeader = (item, index) => {
    console.log(index);
  }

  render() {
    return (
      <div className='HomePage'>

      </div>
    );
  }
}

export default HomePage;