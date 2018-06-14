import React, { Component } from 'react';
import {
  Card,
  Chip,
  Typography,
  IconButton
} from '@material-ui/core';
import {
  Send
} from '@material-ui/icons';
import moment from 'moment';
import WeekSelector from './WeekSelector';

const styles = {
  chips: {
    margin: '4px 4px'
  },
  container: {
    margin: '16px 16px 8px 8px',
    padding: '4px 8px'
  },
  dateHeadings: {
    marginTop: '8px'
  },
  datesContainer: {
    marginTop: '8px'
  },
  noTimePadding: {
    margin: '4px 4px'
  },
  sendToClient: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '10px'
  }
};

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
        <Typography variant="title">Scheduling a meeting with {clientName} at {locationName}.</Typography>
        <WeekSelector updateAvailability={this.updateAvailability} />
        {
          this.state.availableDates.map((availableDate) =>
            (
              <DateTab
                key={`${availableDate.date}`}
                availableDate={availableDate}
                style={styles.datesContainer}
              />
            )
          )
        }
        <div style={styles.sendToClient}>
          <Typography variant="subheader">Send times to client.</Typography><IconButton><Send /></IconButton>
        </div>
      </Card>
    );
  }
}

const DateTab = ({ availableDate }) => (
  <div style={styles.dateHeadings}>
    <div style={styles.chips}>
      <Typography variant="subheader">{availableDate.date}</Typography>
    </div>
    {
      availableDate.times.length === 0 ?
        <div style={styles.noTimePadding}>
          <Typography variant="body2">No times available on this date. </Typography>
        </div> :
      availableDate.times.map((time) => <Chip key={`${time}${availableDate.date}`} label={time} style={styles.chips} />)
    }
  </div>
);
