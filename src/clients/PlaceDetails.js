import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import metersToMiles from '../shared/utils/metersToMiles';

const getTimeString = (hourString) => {
  if (hourString && hourString.length === 4) {
    const hours = Number(hourString.substring(0, 2));
    const mins = Number(hourString.substring(2));

    return moment().hour(hours).minute(mins).format('LT');
  }

  return 'closed';
};

const StoreHours = ({ hours, day }) => {
  let hourString = 'closed';

  if (hours) {
    hourString = `${getTimeString(hours.start)} - ${getTimeString(hours.end)}`;
  }
  return (
    <Typography gutterBottom variant="body1">
      {day}{hourString}
    </Typography>
  );
};

const PlaceDetails = ({ data, details, schedule }) => {
  if (!data) {
    return null;
  }

  let hasHours = false;
  let openHours = [];

  if (details && details != null) {
    if (details.hours && details.hours.length) {
      hasHours = details.hours && details.hours.length;
      openHours = details.hours[0].open;
    }
  }

  return (
    <Card>
      <CardMedia
        image={data.image_url}
        style={styles.media}
      />
      <CardContent>
        <Typography component="h2" gutterBottom variant="headline">
          {data.name}
        </Typography>
        <Typography gutterBottom variant="body2">
          {metersToMiles(data.distance)}m away &bull; {data.display_cost}
        </Typography>
        <Typography gutterBottom variant="body1">
          {data.phone}
        </Typography>
        <Typography gutterBottom variant="body2">
          {data.display_address}
        </Typography>
        {hasHours && openHours ?
          <div>
            <Typography gutterBottom variant="body2">
              Store Hours: {details.is_closed ? 'Currently Closed' : 'Open Now'}
            </Typography>
            <Typography gutterBottom variant="body1">
              Store Hours: {details.is_closed ? 'Currently Closed' : 'Open Now'}
            </Typography>
            <StoreHours day="Monday" hours={openHours[0]} />
            <StoreHours day="Tuesday" hours={openHours[1]} />
            <StoreHours day="Wednesday" hours={openHours[2]} />
            <StoreHours day="Thursday" hours={openHours[3]} />
            <StoreHours day="Friday" hours={openHours[4]} />
            <StoreHours day="Saturday" hours={openHours[5]} />
            <StoreHours day="Sunday" hours={openHours[6]} />
          </div>
          :
          <Typography gutterBottom variant="body2">
            Business Hours Unavailable
          </Typography>
        }
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => schedule(data)} size="small">
          Select This Place
        </Button>
      </CardActions>
    </Card>
  );
};

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
};

export default PlaceDetails;
