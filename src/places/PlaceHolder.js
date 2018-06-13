import React from 'react';

const PlaceHolder = ({ name }) => (
  <div
    style={{
      alignItems: 'center',
      background: 'grey',
      color: 'white',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: '15px 10px',
      textAlign: 'center'
    }}
  >
    {name}
  </div>
);

export default PlaceHolder;
