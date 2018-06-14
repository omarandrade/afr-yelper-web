import React from 'react';
import {
  browserHistory,
  IndexRedirect,
  Redirect,
  Route,
  Router
} from 'react-router';
import AppContainer from './layout/AppContainer';
import AuthenticatedContainer from './layout/AuthenticatedContainer';
import ClientsContainer from './clients/ClientsContainer';
import HomeContainer from './home/HomeContainer';
import LoginContainer from './login/LoginContainer';
import PlacesContainer from './places/PlacesContainer';
import SchedulerContainer from './scheduler/SchedulerContainer';

const routeNames = {
  clients: 'clients',
  home: 'home',
  login: 'login',
  places: 'places',
  scheduler: 'scheduler'
};

const routes = (
  <Router history={browserHistory}>
    <Route component={AppContainer} path="/">
      <IndexRedirect to={routeNames.clients} />
      <Route component={LoginContainer} path={routeNames.login} />
      <Route component={AuthenticatedContainer}>
        <Route component={ClientsContainer} path={routeNames.clients} />
        <Route component={HomeContainer} path={routeNames.home} />
        <Route component={PlacesContainer} path={routeNames.places} />
        <Route component={SchedulerContainer} path={routeNames.scheduler} />
      </Route>
    </Route>
    <Redirect path="*" to={routeNames.clients} />
  </Router>
);

export default routes;
export {
  routeNames
};
