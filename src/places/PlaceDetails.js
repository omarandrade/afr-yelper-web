import React from 'react';
import Paper from '@material-ui/core/Paper';

const PlaceDetails = ({ data }) => {
  const logoStyle = {
    ...styles.logo,
    background: `url(${data.image}) no-repeat center`
  };

  return (
    <Paper>
      <div style={logoStyle} />
      <h1>{data.name}</h1>
    </Paper>
  );
};

const styles = {
  img: {
    max_width: '100%'
  },
  logo: {
    background_size: 'cover',
    height: '8rem'
  }
};

export default PlaceDetails;
