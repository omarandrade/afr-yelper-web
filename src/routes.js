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
import PlacesContainer from './places/PlacesContainer';

const routeNames = {
  clients: 'clients',
  home: 'home',
  places: 'places'
};

const routes = (
  <Router history={browserHistory}>
    <Route component={AppContainer} path="/">
      <IndexRedirect to={routeNames.clients} />
      <Route component={ClientsContainer} path={routeNames.clients} />
      <Route component={HomeContainer} path={routeNames.home} />
      <Route component={PlacesContainer} path={routeNames.places} />
    </Route>
    <Redirect path="*" to={routeNames.clients} />
  </Router>
);

export default routes;
export {
  routeNames
};
