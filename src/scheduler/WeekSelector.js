import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import { NavigateAfter, NavigateBefore } from '@material-ui/icons';
import moment from 'moment';

export default class WeekSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeek: moment().day(0)
    };
  }

  incrementWeek() {
    this.setState({
      currentWeek: this.state.currentWeek.day(7)
    });
    this.props.updateAvailability(this.state.currentWeek);
  }

  decrementWeek() {
    if (moment().day(0) < this.state.currentWeek.day(-7)) {
      this.setState({
        currentWeek: this.state.currentWeek.day(-7)
      });
      this.props.updateAvailability(this.state.currentWeek);
    }
  }

  render() {
    return (
      <div>
        {/* <IconButton onClick={this.incrementWeek}><NavigateBefore /></IconButton> */}
        <IconButton><NavigateBefore /></IconButton>
        <p>Week of {this.state.currentWeek.format('MMMM Do')}</p>
        <IconButton><NavigateAfter /></IconButton>
        {/* <IconButton onClick={this.decrementWeek}><NavigateAfter /></IconButton> */}
      </div>
    );
  }
}
