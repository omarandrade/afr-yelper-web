import React from 'react';

const PlaceHolder = ({ data = {}, onClickItem, placeNumber, selected }) => {
  const classes = `places--placeholder${selected ? ' active' : ''}`;

  return (
    <div
      className={classes}
      onClick={() => onClickItem(data)}
      role="presentation"
    >
      {placeNumber}
    </div>
  );
};

export default PlaceHolder;
