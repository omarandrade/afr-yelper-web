import authActions from './auth';
import clientsActions from './clients';
import sampleActions from './sample';
import placesActions from './places';

module.exports = {
  ...authActions,
  ...clientsActions,
  ...sampleActions,
  ...placesActions
};
