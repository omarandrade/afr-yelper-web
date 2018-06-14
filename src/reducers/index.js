import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import clients from './clients';
import places from './places';
import sample from './sample';

export default combineReducers({
  auth,
  clients,
  form: formReducer,
  places,
  sample
});
