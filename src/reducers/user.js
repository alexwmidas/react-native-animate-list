const initialState = {
  isFetching: false,
  users: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST_PENDING':
      return {
        ...state,
        isFetching: true,
        users: [],
      };
    case 'FETCH_USERS_REQUEST_FULFILLED':
      return {
        ...state,
        isFetching: false,
        users: action.payload.data || [],
      };
    case 'FETCH_USERS_REQUEST_REJECTED':
      return {
        ...state,
        isFetching: false,
        users: [],
      };
    default:
      return state;
  }
}
