import { combineReducers } from 'redux';
import users from './users';
import userFriends from './userFriends';

export default combineReducers({
  users,
  userFriends,
});
