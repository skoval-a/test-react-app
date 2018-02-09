import React, { Component } from 'react';

import {
  Dropdown,
} from '../../components';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDropdown: [],
    };
  }

  isContentDropdown = (id) => {
    if (this.state.isOpenDropdown.length > 0 && this.state.isOpenDropdown.includes(id) ) {
      this.setState({
        isOpenDropdown: this.state.isOpenDropdown.filter(item => item !== id)
      });
    } else if (!this.state.isOpenDropdown.includes(id)) {
      this.setState({
        isOpenDropdown: [...this.state.isOpenDropdown,id],
      });
    }
  }


  render() {
    console.log('-------', this.state.isOpenDropdown);
    return (
      <div className='about'>
        <div className="about__header">
          <h1>About Page</h1>
        </div>
        <div className="content">
          <Dropdown
            id={1}
            title='Dropdown'
            isContentDropdown={() => this.isContentDropdown(1)}
            {...this.state}
          />
          <Dropdown
            id={2}
            title='Dropdown'
            isContentDropdown={() => this.isContentDropdown(2)}
            {...this.state}
          />
          <Dropdown
            id={3}
            title='Dropdown'
            isContentDropdown={() => this.isContentDropdown(3)}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

export default About;