import { GET_SAMPLE } from '../constants/actionTypes';

export const initialState = {
  isLoading: false,
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SAMPLE.request:
      return {
        ...state,
        isLoading: true
      };

    case GET_SAMPLE.failure:
      return {
        ...state,
        isLoading: false
      };

    case GET_SAMPLE.success:
      return {
        ...state,
        isLoading: false,
        message: action.data.message
      };

    default:
      return state;
  }
};
