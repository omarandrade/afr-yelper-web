import api from './utils/api';
import { createAsyncAction } from './utils/asyncUtils';
import { GET_SAMPLE } from '../constants/actionTypes';

const getSample = () => (
  createAsyncAction(GET_SAMPLE, (state) => api.getAuthenticatedAsync('/api/hello', state))
);

export default {
  getSample
};
