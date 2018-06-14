import { GET_PLACES, GET_PLACE_DETAILS } from '../constants/actionTypes';

export const initialState = {
  detailsLoading: false,
  isLoading: false,
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACES.request:
      return {
        ...state,
        isLoading: true
      };

    case GET_PLACES.failure:
      return {
        ...state,
        isLoading: false
      };

    case GET_PLACES.success:
      return {
        ...state,
        isLoading: false,
        places: action.data.places
      };

    case GET_PLACE_DETAILS.request:
      return {
        ...state,
        detailsLoading: true
      };

    case GET_PLACE_DETAILS.failure:
      return {
        ...state,
        detailsLoading: false
      };

    case GET_PLACE_DETAILS.success:
      return {
        ...state,
        detailsLoading: false
      };

    default:
      return state;
  }
};
