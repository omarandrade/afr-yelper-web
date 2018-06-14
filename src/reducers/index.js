import { combineReducers } from 'redux';
import clients from './clients';
import sample from './sample';
import places from './places';

export default combineReducers({
  clients,
  places,
  sample
});
