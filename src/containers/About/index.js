import React, { Component } from 'react';

import Dropdown from '../../components/Dropdown';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDropdown: false,
    };
  }

  isContentDropdown = () => {
    this.setState({
      isOpenDropdown: !this.state.isOpenDropdown,
    });
  }

  render() {
    console.log('-------');
    return (
      <div className='about'>
        <div className="about__header">
          <h1>About Page</h1>
        </div>
        <div className="content">
          <Dropdown
            title='Dropdown'
            isContentDropdown={this.isContentDropdown}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

export default About;