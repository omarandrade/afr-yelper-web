import { GET_CLIENTS } from '../constants/actionTypes';

export const initialState = {
  clients: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS.request:
      return {
        ...state,
        isLoading: true
      };

    case GET_CLIENTS.failure:
      return {
        ...state,
        isLoading: false
      };

    case GET_CLIENTS.success:
      return {
        ...state,
        clients: action.data.clients,
        isLoading: false
      };

    default:
      return state;
  }
};
