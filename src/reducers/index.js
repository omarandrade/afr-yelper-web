import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import clients from './clients';
import sample from './sample';
import places from './places';

export default combineReducers({
  auth,
  clients,
  form: formReducer,
  places,
  sample
});
