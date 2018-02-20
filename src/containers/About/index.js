import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction'

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
      name: '',
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

  listView = (contact, index) => {
    return (
      <div className='row'>
        <div className="col-md-10">
          <p>{contact.name}</p>
        </div>
        <div className="col-md-2">
          <button
            onClick={() => this.props.deleteContact(index)}
            className='btn btn-danger'>
            Remove
          </button>
        </div>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('aa',e);
    let contact = {
      name: this.state.name,
    }
    this.setState({
      name: '',
    })
    this.props.createContact(contact);
  }

  render() {
    return (
      <div className='about'>
        <div className="about__header">
          <h1>About Page</h1>
        </div>
        <div className="about__content">
          <div className="wrapForm">
            <div className="wrapForm__header">
              <h3>Add contact Form</h3>
            </div>
            <form className='form' onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <input
                  required
                  type="text"
                  value={this.state.name}
                  className='form-control'
                  placeholder='Add Contact'
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success">
                  <i className='fa fa-user-plus'></i>
                  <p className="btnName">Add Contact</p>
              </button>
            </form>
            {
              this.props.contacts.length > 0 && this.props.contacts.map((contact, i) =>
                this.listView(contact, i)
              ) || <div>Not contacts</div>
            }
          </div>
          <div className="wrapDropDown">
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    contacts: state.contacts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);