import { createAsyncAction } from './utils/asyncUtils';
import {
  GET_PLACES,
  GET_PLACE_DETAILS,
  PLACE_SELECTED
} from '../constants/actionTypes';
import api from './utils/api';

const getQueryParams = (params) => {
  const formattedParams = Object.keys(params).map(
    (currentParam) => `${currentParam}=${params[currentParam]}`
  );

  return formattedParams.join('&');
};

const getPlaces = (data = {}) =>
  createAsyncAction(GET_PLACES, () =>
    api.getAsync(`/api/places?${getQueryParams(data)}`)
  );

const getPlaceDetails = (data) =>
  createAsyncAction(GET_PLACE_DETAILS, () =>
    api.getAsync(`/api/places/${encodeURIComponent(data)}`)
  );

const selectPlace = (data) => ({
  data,
  type: PLACE_SELECTED
});

export default {
  getPlaceDetails,
  getPlaces,
  selectPlace
};
