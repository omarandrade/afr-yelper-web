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
    return (
      <div
        style={{
          alignItems: 'center',
          background: this.props.selected ? 'red' : 'gray',
          color: 'white',
          display: 'inline-flex',
          justifyContent: 'center',
          padding: '15px 10px',
          textAlign: 'center'
        }}
        onClick={this.selectMe}
      >
        {this.props.data.name}
      </div>
    );
  }
}

export default PlaceHolder;
