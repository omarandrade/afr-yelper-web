/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaceMap from './PlaceMap';
import placeMockData from '../mockdata/locations.json';
import userMockData from '../mockdata/user.json';

class PlaceList extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    // TODO: consider where this is coming from.
    const mapCenter = {
      lat: this.props.user.location.lat,
      lng: this.props.user.location.lon
    };

    return (
      <div>
        <h1>Places and Stuff</h1>
        <PlaceMap locations={this.props.places} mapCenter={mapCenter} />
      </div>
    );
  }
}

export const mapStateToProps = () => ({
  places: placeMockData.locations,
  user: userMockData
});

export default connect(mapStateToProps)(PlaceList);
