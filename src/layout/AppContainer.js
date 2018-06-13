import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

require('../styles/App.scss');

const muiTheme = getMuiTheme({
  palette: {

  }
});

const AppContainer = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="app">
      {props.children}
    </div>
  </MuiThemeProvider>
);

export default AppContainer;
