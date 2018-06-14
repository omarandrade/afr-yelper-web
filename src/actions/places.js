import { createAsyncAction } from './utils/asyncUtils';
import { GET_PLACES, GET_PLACE_DETAILS } from '../constants/actionTypes';
import api from './utils/api';

const getPlaces = (data) =>
  createAsyncAction(GET_PLACES, () =>
    api.getAsync(
      `/api/places?category=${encodeURIComponent(
        data.category
      )}&location=${encodeURIComponent(data.zipcode)}`
    )
  );

const getPlaceDetails = (data) =>
  createAsyncAction(GET_PLACE_DETAILS, () =>
    api.getAsync(`/api/places/${encodeURIComponent(data)}`)
  );

export default {
  getPlaceDetails,
  getPlaces
};
