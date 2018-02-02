import React, { Component } from 'react';

import {
  Header,
  UsersList,
} from '../../components';


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
              <h2 className='usersHeader__title'>Users</h2>
            </div>
            <UsersList

            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;