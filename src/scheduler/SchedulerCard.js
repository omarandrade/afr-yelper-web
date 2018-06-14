import React from 'react';
import {
  Card,
  CardHeader,
  Chip
} from '@material-ui/core';

const SchedulerCard = ({ client = {
  name: 'Mo Andrade'
}, location = {
  name: 'Colectivo'
}, dates = [
  {
    date: '6/15/2018',
    times: [
      '9:00am',
      '10:00am'
    ]
  },
  {
    date: '6/17/2018',
    times: [
      '1:00pm',
      '6:00pm',
      '7:00pm'
    ]
  },
  {
    date: '6/18/2018',
    times: [
      '4:00pm',
      '5:00pm',
      '6:00pm',
      '7:00pm'
    ]
  }
] }) => {
  const locationName = location.name;
  const clientName = client.name;
  return (
    <Card>
      <CardHeader title="Scheduling a meeting" />
      <p>with {clientName}</p>
      <p>at {locationName}</p>
      {
        dates.map((availableDate) => <DateTab availableDate={availableDate} />)
      }
    </Card>
  );
};

const DateTab = ({ availableDate }) => (
  <div>
    <h4>{availableDate.date}</h4>
    {
      availableDate.times.map((time) => <Chip label={time} />)
    }
  </div>
);

export default SchedulerCard;
