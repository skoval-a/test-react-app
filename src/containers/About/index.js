import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Dropdown,
} from '../../components';

const listDropdowns = [
  {
    name: 'Name 1'
  },
  {
    name: 'Name 2',
  },
  {
    name: 'Name 2',
  },
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: listDropdowns,
    };
  }

  isContentDropdown = (item, index) => {
    const users = [...this.state.users];
    users[index].isOpen = !users[index].isOpen;
    console.log(users);
    this.setState({
      users,
    });
  }

  addUser = () => {
    console.log('Add USER click', this.props);
    this.props.addUser(this.userInput.value);
    this.userInput.value = '';
  }

  render() {
    console.log('-------', this.props.users);
    return (
      <div className='about'>
        <div className="about__header">
          <h1>About Page</h1>
        </div>
        <div className="about__content">
          <div className="wrapDropDown">
            <input type='text' ref={(input) => {this.userInput = input}} />
            <button onClick={this.addUser}>
              Add user
            </button>
            {
              listDropdowns.map((item, index) => {
                return (
                  <Dropdown
                    key={index}
                    isOpenDropdown={item.isOpen}
                    isContentDropdown={() => this.isContentDropdown(item, index)}
                    title='Dropdown'
                  />
                );
              })
            }
          </div>
          <div className="wrapUsers">
            {
              this.props.users.map((item, index) => {
                return (
                  <p key={index}>{item}</p>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
// function MapStateToProps(state) {
//   return {
//     testStore: state.users,
//   }
// }

export default connect(
  state => ({
    users: state.users,
  }),
  dispatch => ({
    addUser: (userName) => {
      dispatch({ type: 'ADD_USER', userName: userName })
    }
  })
)(About);