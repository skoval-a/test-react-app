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
      activeUser: null,
      errorMessage: false,
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
          activeUser: data[0],
        })
      })

  }

  updateApp(config) {
    const users = this.state.data;
    this.setState(config);
    console.log(config.activeUser);
    if(config.activeUser === this.state.activeUser.id) {
      this.setState({
        errorMessage: true,
      })
    } else {
      users.length > 0 &&
      users.map(item => {
        if(item.id === config.activeUser) {
          this.setState({
            activeUser: item,
            errorMessage: false,
          })
        }
      });
    }
  }

  render() {
    return (
      <div className='home'>
        <div className="home__header">
          <input className='form-control' placeholder='Search users' />
          <button className='btn btn-info'>
            Sort Name
          </button>
        </div>
        <div className="home__content">
          <div className="home__sidebar">
            <ActiveUser
              activeUser={this.state.activeUser}
            />
            {
              this.state.errorMessage &&
                <h1>
                  Error
                </h1>
            }
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