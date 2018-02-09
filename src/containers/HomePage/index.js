import React, { Component } from 'react';

import {
  ActiveUser,
  UsersList,
  SearchInput,
} from '../../components';

import url from '../../data.txt';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeUser: null,
      errorMessage: false,
      errorSearch: false,
      activeNumber: 0,
      currentPage: 0,
    };
  }
  handleClickHeader = (item, index) => {

  }

  componentWillMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.initialData = data;
        this.setState({
          data: this.initialData,
          activeUser: data[0],
        })
      })

  }

  updateApp(config) {
    console.log('config', config);
    this.setState(config);

    if (config.activeUser) {
      if (config.activeUser.id === this.state.activeUser.id) {
          this.setState({
          errorMessage: true,
        })
      } else {
        this.setState({
          errorMessage: false,
        })
      }
    }
  }

  search = (e) => {
    const value = e.target.value.toLowerCase();
    const fillter = this.initialData.filter(user => {
      return user.name.toLowerCase().includes(value);
    })
    this.updateApp({
      data: fillter,
    });
    if(fillter.length > 0) {
      this.setState({
        errorSearch: false,
      })
    } else {
      this.setState({
        errorSearch: true,
      });
    }
  }

  handlePagination = (e, number) => {
    e.preventDefault();
    console.log(e);
    const current = this.state.currentPage;
    if(current + number >= 0 && current + number < Math.ceil(this.state.data.length  / 15)) {
      this.setState(prev => ({
          currentPage: prev.currentPage + number,
        }
      ));
    }
  }

  splitUsers = () => {
    return this.state.data && this.state.data.slice(this.state.currentPage * 15, this.state.currentPage * 15 + 15);
  }

  sort = (type) => {
    const data = this.initialData;
    console.log('sort', this.initialData);
    const sorted = data.sort((a, b) => {
      return a[type] > b[type] ? 1 : -1;
    });
    this.setState({
      data: sorted,
    })
  }

  reset = () => {
    console.log('initialData', this.initialData);
    this.updateApp({
      data: this.initialData,
      activeUser: 0,
    });

    console.log('6666', this.state.data);
  }

  render() {
    console.log('render', this.state.data);
    return (
      <div className='home'>
        <div className="home__header">
          <SearchInput
            searchValue={this.search.bind(this)}
            isError={this.state.errorSearch}
          />
          <div className='rowSorting'>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.sort('name')}
            >
                <i class="fa fa-users"></i>
                <p className='btnName'>Name</p>
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => this.sort('age')}
            >
              <i class="fa fa-sort-amount-desc"></i>
              <p className='btnName'>Age</p>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => this.reset()}
            >
              <i class="fa fa-ban"></i>
              <p className='btnName'>Reset</p>
            </button>
          </div>
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
              data={this.splitUsers()}
              handlePagination={this.handlePagination}
              updateApp={this.updateApp.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;