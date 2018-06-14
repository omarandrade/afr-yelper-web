import React from 'react';
import GoogleMap from 'google-map-react';
import PlaceHolder from './PlaceHolder';

export default ({
  locations = [],
  mapCenter = { lat: 0, lon: 0 },
  zoom = 11,
  selectPlace,
  selectedPlace
}) => {
  const placeholders = locations.map((place) => {
    let selected = false;

    if (selectedPlace) {
      selected = selectedPlace.yelpId === place.yelpId;
    }

    return (
      <PlaceHolder
        key={place.yelpId}
        data={place}
        lat={place.latitude}
        lng={place.longitude}
        select={selectPlace}
        selected={selected}
      />
    );
  });

  return (
    <div style={style}>
      <GoogleMap defaultCenter={mapCenter} defaultZoom={zoom}>
        {placeholders}
      </GoogleMap>
    </div>
  );
};

const style = {
  height: '40vh',
  width: '100%'
};
