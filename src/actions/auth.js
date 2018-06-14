import { createAsyncAction } from './utils/asyncUtils';
import { LOGIN } from '../constants/actionTypes';

const login = () => (
  createAsyncAction(LOGIN, () => (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            location: {
              lat: 43.0535610152195,
              lon: -87.8868182982865
            },
            name: 'Karl Malone'
          }
        });
      }, 400);
    })
  ))
);

export default {
  login
};
