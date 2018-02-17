const INITIAL_STATE = [
  'USER1',
  'USER2',
];

export default function users(state = INITIAL_STATE, action ) {
  switch (action.type) {
    case 'ADD_USER': {
      return [
        ...state,
        action.userName,
      ];
    }
    case 'DELETE_USER': {
      return state;
    }
    default: return state;
  }
}