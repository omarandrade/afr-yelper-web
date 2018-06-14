import authActions from './auth';
import clientsActions from './clients';
import sampleActions from './sample';
import placeActions from './places';

module.exports = {
  ...authActions,
  ...clientsActions,
  ...sampleActions,
  ...placeActions
};
