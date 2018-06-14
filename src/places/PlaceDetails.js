import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Moment from 'moment';
import metersToMiles from '../shared/utils/metersToMiles';

function getTimeString(hourString) {
  if (hourString && hourString.length === 4) {
    const hours = Number(hourString.substring(0, 2));
    const mins = Number(hourString.substring(2));

    const m = new Moment();
    m.hour(hours);
    m.minute(mins);

    return m.format('LT');
  }

  return 'closed';
}

const StoreHours = ({ hours, day }) => {
  let hourString = 'closed';

  if (hours) {
    hourString = `${getTimeString(hours.start)} - ${getTimeString(hours.end)}`;
  }
  return (
    <div className="hours">
      <span>{day}</span>
      <span>{hourString}</span>
    </div>
  );
};

const PlaceDetails = ({ data, details, loading, schedule }) => {
  const logoStyle = {
    ...styles.logo,
    background: `url(${data.image_url}) no-repeat center`
  };

  let openStatus = <span className="open">Open Now</span>;
  let hasHours = false;
  let openHours = [];

  if (details && details != null) {
    if (details.is_closed) {
      openStatus = <span className="closed">Currently Closed</span>;
    }

    if (details.hours && details.hours.length) {
      hasHours = details.hours && details.hours.length;
      openHours = details.hours[0].open;
    }
  }

  return (
    <Paper className="places--details">
      <div style={logoStyle} />
      <h1>{data.name}</h1>
      <p className="overview">
        {metersToMiles(data.distance)}m away &bull; {data.display_cost}
      </p>
      <p className="address">
        {data.phone}
        <br />
        {data.display_address}
      </p>
      {loading ? <CircularProgress className="loader" /> : null}
      {!loading && hasHours && openHours ? (
        <React.Fragment>
          <h2>Store Hours: {openStatus}</h2>
          <StoreHours day="Monday" hours={openHours[0]} />
          <StoreHours day="Tuesday" hours={openHours[1]} />
          <StoreHours day="Wednesday" hours={openHours[2]} />
          <StoreHours day="Thursday" hours={openHours[3]} />
          <StoreHours day="Friday" hours={openHours[4]} />
          <StoreHours day="Saturday" hours={openHours[5]} />
          <StoreHours day="Sunday" hours={openHours[6]} />
        </React.Fragment>
      ) : null}
      {!loading && !hasHours ? <p>Business Hours Unavailable</p> : null}

      <Button color="primary" onClick={() => schedule(data)} type="submit">
        Select This Place
      </Button>
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
