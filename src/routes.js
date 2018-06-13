import React from 'react';
import {
  browserHistory,
  IndexRedirect,
  Redirect,
  Route,
  Router
} from 'react-router';
import AppContainer from './layout/AppContainer';
import ClientsContainer from './clients/ClientsContainer';
import HomeContainer from './home/HomeContainer';

const routeNames = {
  clients: 'clients',
  home: 'home'
};

const routes = (
  <Router history={browserHistory}>
    <Route component={AppContainer} path="/">
      <IndexRedirect to={routeNames.clients} />
      <Route component={ClientsContainer} path={routeNames.clients} />
      <Route component={HomeContainer} path={routeNames.home} />
    </Route>
    <Redirect path="*" to={routeNames.clients} />
  </Router>
);

export default routes;
export {
  routeNames
};
