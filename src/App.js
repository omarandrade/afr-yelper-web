import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import Promise from 'promise-polyfill';
import 'whatwg-fetch'; // fetch API polyfill
import configureStore from './store/configureStore';
import routes from './routes';

injectTapEventPlugin();

if (!window.Promise) {
  window.Promise = Promise;
}

const store = configureStore();
const App = () => (
  <Provider store={store}>
    {routes}
  </Provider>
);

export default App;
