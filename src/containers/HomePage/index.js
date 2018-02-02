import React, { Component } from 'react';

import {
  Header,
  UsersList,
} from '../../components';

import url from '../../data.txt';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  handleClickHeader = (item, index) => {
    console.log(index);
  }

  componentWillMount() {
    fetch(url)
      .then(response => console.log(response.json()))
  }

  updateApp(config) {

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