import React from 'react';
import Paper from '@material-ui/core/Paper';
import Loader from '../shared/Loader';

const PlaceDetails = ({ data, loading }) => {
  const logoStyle = {
    ...styles.logo,
    background: `url(${data.image_url}) no-repeat center`
  };

  return (
    <Paper>
      <div style={logoStyle} />
      <h1>{data.name}</h1>
      <p>{data.phone}</p>
      <p>{data.display_address}</p>
      {loading ? <Loader /> : <p>Store Hours Go Here</p>}
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
