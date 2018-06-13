import React from 'react';
import {
  browserHistory,
  IndexRedirect,
  Redirect,
  Route,
  Router
} from 'react-router';
import AppContainer from './layout/AppContainer';
import HomeContainer from './home/HomeContainer';

const routeNames = {
  home: 'home'
};

const routes = (
  <Router history={browserHistory}>
    <Route component={AppContainer} path="/">
      <IndexRedirect to={routeNames.home} />
      <Route component={HomeContainer} path={routeNames.home} />
    </Route>
    <Redirect path="*" to={routeNames.home} />
  </Router>
);

export default routes;
export {
  routeNames
};
