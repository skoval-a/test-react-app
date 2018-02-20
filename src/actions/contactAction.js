import * as actionTypes from './ActionTypes';

export const createContact = (contact) => {
  return {
    type: actionTypes.ADD_CONTACTS,
    contact: contact,
  }
}

export const deleteContact = (id) => {
  return {
    type: actionTypes.DELETE_CONTACT,
    id: id,
  }
}