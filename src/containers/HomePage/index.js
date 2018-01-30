import React, { Component } from 'react';

import Header from '../../components/Header/index.js';
import UserList from '../../components/UsersList';


class HomePage extends Component {

  handleClickHeader = (item, index) => {
    console.log(index);
  }

  render() {
    return (
      <div className='home'>
        <div className="home__header">
          <input className='form-control' placeholder='Search users' />
        </div>
        <div className="home__content">
          <div className="home__sidebar">

          </div>
          <div className="home__wrapUsers">
            <div className="usersHeader">
              <h2>Users</h2>
            </div>
            <UserList

            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;