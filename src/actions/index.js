import clientsActions from './clients';
import sampleActions from './sample';
import placeActions from './places';

module.exports = {
  ...clientsActions,
  ...sampleActions,
  ...placeActions
};
