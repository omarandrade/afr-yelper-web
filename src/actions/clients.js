import api from './utils/api';
import { createAsyncAction } from './utils/asyncUtils';
import { GET_CLIENTS } from '../constants/actionTypes';

const getClients = () => (
  createAsyncAction(GET_CLIENTS, () => api.getAsync('/api/clients'))
);

export default {
  getClients
};
