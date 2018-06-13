import React from 'react';

require('../styles/App.scss');

const AppContainer = (props) => (
  <div className="app">
    {props.children}
  </div>
);

export default AppContainer;
