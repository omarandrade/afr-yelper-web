import React from 'react';
import GoogleMap from 'google-map-react';
import PlaceHolder from './PlaceHolder';

export default ({
  locations = [],
  mapCenter = { lat: 0, lon: 0 },
  zoom = 11
}) => {
  const placeholders = locations.map((place) => (
    <PlaceHolder
      lat={place.location.latitude}
      lng={place.location.longitude}
      name={place.name}
    />
  ));

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMap defaultCenter={mapCenter} defaultZoom={zoom}>
        {placeholders}
      </GoogleMap>
    </div>
  );
};
