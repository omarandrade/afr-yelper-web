import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => (
  <div style={styles.container}>
    <CircularProgress />
  </div>
);

const styles = {
  container: {
    bottom: 0,
    height: 40,
    left: 0,
    margin: 'auto',
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    top: 0
  }
};


export default Loader;
