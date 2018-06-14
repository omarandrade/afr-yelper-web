/* eslint-disable */
import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  Chip,
  Typography
} from '@material-ui/core';
import moment from 'moment';
import WeekSelector from './WeekSelector';

const styles = {
  chips: {
    margin: '0px 4px'
  },
  container: {
    margin: '16px 16px 8px 8px',
    padding: '4px 8px'
  }
}

export default class ScheduleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableDates: null
    };
  }

  componentWillMount() {
    this.updateAvailability();
  }

  updateAvailability(currentWeek = moment().day(0)) {
    const availableDates = [];
    for (let index = 0; index < 7; index += 1) {
      const shiftedDate = currentWeek.day(index);
      availableDates.push({
        date: shiftedDate.format('dddd, MMMM Do YYYY'),
        times: this.generateTimes()
      });
    }
    this.setState({
      availableDates
    });
  }

  generateTimes() {
    const availableTimes = Math.floor(Math.random() * Math.floor(7));
    const times = [];
    for (let index = 0; index < availableTimes; index += 1) {
      times.push(moment().minute(0).hour((Math.floor(Math.random() * Math.floor(12)) + 7)).format('h:mm a'));
    }
    return times;
  }

  render() {
    const clientName = this.props.client.name;
    const locationName = this.props.location.name;
    return (
      <Card style={styles.container}>
        <Typography variant="display1">Scheduling a meeting with {clientName} at {locationName}.</Typography>
        <WeekSelector updateAvailability={this.updateAvailability} />
        {
          this.state.availableDates.map((availableDate) =>
            (
              <DateTab
                key={`${availableDate.date}`}
                availableDate={availableDate}
              />
            )
          )
        }
      </Card>
    );
  }
}

const DateTab = ({ availableDate }) => (
  <div>
    <p>{availableDate.date}</p>
    {
      availableDate.times.length === 0?
        <Typography variant="body2">No times available on this date. </Typography> :
        availableDate.times.map((time) => <Chip key={`${time}${availableDate.date}`} label={time} style={styles.chips}/>)
    }
  </div>
);
