import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const Blade = ({ children, label, onClick, open }) => (
  <div style={styles.container(open)}>
    {open ?
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography color="inherit" variant="title">
            {label}
          </Typography>
        </Toolbar>
      </AppBar>
      :
      <Paper onClick={onClick} style={styles.bladeContainer}>
        <Typography color="inherit" style={styles.label} variant="title">
          {label}
        </Typography>
      </Paper>
    }
    {open && children}
  </div>
);

const styles = {
  bladeContainer: {
    backgroundColor: grey[400],
    height: '100vh',
    width: 56
  },
  container: (open) => ({
    display: 'flex',
    flexDirection: open ? 'column' : 'row',
    width: open ? '100%' : null
  }),
  label: {
    paddingLeft: 36,
    transform: 'rotate(90deg)',
    whiteSpace: 'nowrap'
  }
};

export default Blade;
