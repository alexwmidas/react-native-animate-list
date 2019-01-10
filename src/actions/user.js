import axios from 'axios';

import { api } from '../common/config';

export const fetchUsers = () => dispatch =>
  dispatch({
    type: 'FETCH_USERS_REQUEST',
    payload: axios.get(api.url('/users')),
  });
