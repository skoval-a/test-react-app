import React, { Component } from 'react';

import {
  ActiveUser,
  UsersList,
} from '../../components';

import url from '../../data.txt';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeUser: 0,
    };
  }
  handleClickHeader = (item, index) => {
    console.log(index);
  }

  componentWillMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
        })
      })

  }

  updateApp(config) {
    const users = this.state.data;
    this.setState(config);
    users.length > 0 &&
      users.map(item => {
        if(item.id === config.activeUser) {
          this.setState({
            activeUser: item,
          })
        }
      })
  }

  render() {
    return (
      <div className='home'>
        <div className="home__header">
          <input className='form-control' placeholder='Search users' />
        </div>
        <div className="home__content">
          <div className="home__sidebar">
            <ActiveUser
              activeUser={this.state.activeUser}
            />
          </div>
          <div className="home__wrapUsers">
            <div className="usersHeader">
              <h2 className='usersHeader__title'>Users</h2>
            </div>
            <UsersList
              data={this.state.data}
              updateApp={this.updateApp.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;