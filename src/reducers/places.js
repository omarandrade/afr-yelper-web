import {
  GET_PLACES,
  GET_PLACE_DETAILS,
  PLACE_SELECTED
} from '../constants/actionTypes';

export const initialState = {
  detailsLoading: false,
  isLoading: false,
  places: [],
  selectedPlaceDetails: null
};

const placeSort = (a, b) => b.nmReview - a.nmReview || a.distance - b.distance;

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
        places: action.data.places.sort(placeSort)
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
    case PLACE_SELECTED:
      return {
        ...state,
        selectedPlaceDetails: action.data
      };

    default:
      return state;
  }
};
