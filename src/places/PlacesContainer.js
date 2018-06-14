/* eslint-disable */
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import PlaceMap from './PlaceMap';
import PlaceList from './PlaceList';
import PlaceDetails from './PlaceDetails';
import placeMockData from '../mockdata/locations.json';
import userMockData from '../mockdata/user.json';
import { getPlaceDetails } from '../actions';

class PlacesContainer extends Component {
  state = {
    selectedPlace: null
  };

  componentWillMount() {
    if (this.props.places.length) {
      this.setState({
        selectedPlace: this.props.places[0]
      });
    }
  }

  selectPlace = (data) => {
    this.setState({
      selectedPlace: data,
      selectedPlaceDetails: null
    });

    this.props.getDetails(data.yelpId).then((results) => {
      this.setState({
        selectedPlaceDetails: results.data
      });
    });
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
        <Grid container spacing={16}>
          <Grid item sm={8}>
            <Paper>
              <PlaceMap
                locations={this.props.places}
                mapCenter={mapCenter}
                selectedPlace={this.state.selectedPlace}
                selectPlace={this.selectPlace}
              />
            </Paper>
          </Grid>
          <Grid item sm={4}>
            {this.state.selectedPlace == null ? (
              <Paper>
                <p>Select a location from the map</p>
              </Paper>
            ) : (
              <PlaceDetails
                data={this.state.selectedPlace}
                details={this.state.selectedPlaceDetails}
                loading={this.props.placeDetailsLoading}
              />
            )}
          </Grid>
          <Grid item sm={8}>
            <PlaceList
              places={this.props.places}
              select={this.selectPlace}
              selectedPlace={this.state.selectedPlace}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch, props) => ({
  getDetails: (data) => dispatch(getPlaceDetails(data))
});

export const mapStateToProps = (state) => ({
  places: placeMockData,
  user: userMockData,
  placeDetailsLoading: state.places.detailsLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacesContainer);
