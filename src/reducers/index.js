import { combineReducers } from 'redux';
import clients from './clients';
import sample from './sample';

export default combineReducers({
  clients,
  sample
});
