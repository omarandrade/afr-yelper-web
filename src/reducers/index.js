import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import clients from './clients';
import sample from './sample';

export default combineReducers({
  clients,
  form: formReducer,
  sample
});
