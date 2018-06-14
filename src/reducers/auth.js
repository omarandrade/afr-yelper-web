import { LOGIN } from '../constants/actionTypes';

export const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.request:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN.failure:
      return {
        ...state,
        isLoading: false
      };

    case LOGIN.success:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.data.user
      };

    default:
      return state;
  }
};
