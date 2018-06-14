import React from 'react';
import GoogleMap from 'google-map-react';
import PlaceHolder from './PlaceHolder';

const PlaceMap = (props) => {
  const {
    locations = [],
    mapCenter = { lat: 0, lon: 0 },
    onClickItem,
    selectedPlace,
    zoom = 12
  } = props;

  return (
    <div style={style}>
      <GoogleMap defaultCenter={mapCenter} defaultZoom={zoom}>
        {locations.map((place, index) => {
          const selected = selectedPlace && selectedPlace.yelpId === place.yelpId;

          return (
            <PlaceHolder
              key={place.yelpId}
              data={place}
              lat={place.latitude}
              lng={place.longitude}
              onClickItem={onClickItem}
              placeNumber={index + 1}
              selected={selected}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

const style = {
  height: '50vh',
  width: '100%'
};

export default PlaceMap;
