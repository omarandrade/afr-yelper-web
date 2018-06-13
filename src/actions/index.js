import authActions from './auth';
import clientsActions from './clients';
import sampleActions from './sample';

module.exports = {
  ...authActions,
  ...clientsActions,
  ...sampleActions
};
