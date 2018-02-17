const INITIAL_STATE = [
  'This is User friend!',
  'This is two User friend!',
];

export default function userFriends(state = INITIAL_STATE, action ) {
  switch (action.type) {
    case 'ADD_FRIEND_USER': {
      return state;
    }
    case 'DELETE_FRIEND_USER': {
      return state;
    }
    default: return state;
  }
}