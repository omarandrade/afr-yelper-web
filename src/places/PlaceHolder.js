/* eslint-disable */
import React, { Component } from 'react';

class PlaceHolder extends Component {
  static defaultProps = {
    data: {},
    selected: false
  };

  selectMe = () => {
    this.props.select(this.props.data);
  };

  render() {
    const classes =
      'places--placeholder' + (this.props.selected ? ' active' : '');
    return (
      <div className={classes} onClick={this.selectMe}>
        {this.props.num}
      </div>
    );
  }
}

export default PlaceHolder;
