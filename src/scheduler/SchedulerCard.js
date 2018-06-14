import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  Chip
} from '@material-ui/core';
import moment from 'moment';
import WeekSelector from './WeekSelector';

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
    console.log('updating avail');
    const availableDates = [];
    for (let index = 0; index < 7; index += 1) {
      const shiftedDate = currentWeek.day(index);
      availableDates.push({
        date: shiftedDate.format('dddd, MMMM Do YYYY'),
        times: this.generateTimes()
      });
    }
    console.log('generated avail');
    console.log(availableDates);
    this.setState({
      availableDates
    });
  }

  generateTimes() {
    const availableTimes = Math.floor(Math.random() * Math.floor(7));
    const times = [];
    console.log(`${availableTimes} times to be generated`);
    for (let index = 0; index < availableTimes; index += 1) {
      times.push(moment().hour((Math.floor(Math.random() * Math.floor(12)) + 7)).format('h:mm a'));
    }
    console.log(times);
    return times;
  }

  render() {
    const clientName = this.props.client.name;
    const locationName = this.props.location.name;
    return (
      <Card>
        <CardHeader title="Scheduling a meeting" />
        <p>with {clientName}</p>
        <p>at {locationName}</p>
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
    <h4>{availableDate.date}</h4>
    {
      availableDate.times.map((time) => <Chip key={`${time}${availableDate.date}`} label={time} />)
    }
  </div>
);
