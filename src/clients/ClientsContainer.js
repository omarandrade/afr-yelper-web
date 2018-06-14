import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Loader from '../shared/Loader';
import Blade from './Blade';
import ClientsList from './ClientsList';
import ClientInfoCard from './ClientInfoCard';
import PlaceList from './PlaceList';
import PlaceDetails from './PlaceDetails';
import PlaceMap from './PlaceMap';
import {
  getClients,
  getPlaceDetails,
  getPlaces
} from '../actions';
import { routeNames } from '../routes';

export class ClientsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientInfoOpen: false,
      clientListOpen: true,
      placesListOpen: false,
      selectedClient: null,
      selectedPlace: null
    };
  }

  componentWillMount() {
    this.props.getClients();
  }

  onSchedule = () => {
    browserHistory.push(`/${routeNames.scheduler}`);
  }

  onSubmitOptions = (data) => {
    this.props.getPlaces({
      ...data,
      grade: this.state.selectedClient.grade,
      id: this.state.selectedClient.id,
      location: 53202
    })
      .then((result) => {
        if (result.ok) {
          this.setState({
            clientInfoOpen: false,
            clientListOpen: false,
            placesListOpen: true
          });
        }
      });
  }

  setSelectedClient = (selectedClient) => (
    this.setState({
      clientInfoOpen: true,
      clientListOpen: false,
      selectedClient
    })
  )

  setSelectedPlace = (selectedPlace) => (
    this.setState({ selectedPlace })
  )

  render() {
    const {
      clients,
      isLoadingClients,
      isLoadingPlaceDetails,
      isLoadingPlaces,
      places,
      selectedPlaceDetails,
      user
    } = this.props;

    const mapCenter = {
      lat: user.location.lat,
      lng: user.location.lon
    };

    return (
      <div style={styles.container}>
        {this.state.clientInfoOpen || this.state.clientListOpen ?
          <Blade
            label="Clients"
            onClick={() => (
              this.setState({
                clientInfoOpen: false,
                clientListOpen: true,
                placesListOpen: false
              })
            )}
            open={this.state.clientListOpen}
          >
            {isLoadingClients ?
              <Loader />
              :
              <ClientsList clients={clients} onClickItem={this.setSelectedClient} />
            }
          </Blade>
          : null
        }
        {this.state.clientInfoOpen || this.state.clientListOpen || this.state.placesListOpen ?
          <Blade
            label="Client Info"
            onClick={() => (
              this.setState((prevState) => ({
                clientInfoOpen: prevState.selectedClient,
                clientListOpen: !prevState.selectedClient,
                placesListOpen: !prevState.selectedClient
              }))
            )}
            open={this.state.clientInfoOpen}
          >
            {isLoadingPlaces ?
              <Loader />
              :
              <ClientInfoCard client={this.state.selectedClient} onSubmit={this.onSubmitOptions} />
            }
          </Blade>
          : null
        }
        {this.state.clientInfoOpen || this.state.placesListOpen ?
          <Blade
            label="Places"
            onClick={() => (
              this.setState({
                clientInfoOpen: !places,
                clientListOpen: !places,
                placesListOpen: places
              })
            )}
            open={this.state.placesListOpen}
          >
            <div style={styles.placesContainer}>
              <div style={styles.mapDetailsContainer}>
                <div style={styles.mapContainer}>
                  <PlaceMap
                    locations={this.props.places}
                    mapCenter={mapCenter}
                    onClickItem={this.setSelectedPlace}
                    selectedPlace={this.state.selectedPlace}
                  />
                </div>
                <div style={styles.detailsContainer}>
                  <PlaceDetails
                    data={this.state.selectedPlace}
                    details={selectedPlaceDetails}
                    loading={isLoadingPlaceDetails}
                    schedule={this.onSchedule}
                  />
                </div>
              </div>
              <div style={styles.placesListContainer}>
                <PlaceList
                  onClickItem={this.setSelectedPlace}
                  places={places}
                  selectedPlace={this.state.selectedPlace}
                />
              </div>
            </div>
          </Blade>
          : null
        }
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  detailsContainer: {
    flex: 0.4,
    padding: 8
  },
  mapContainer: {
    flex: 0.6
  },
  mapDetailsContainer: {
    display: 'flex',
    flex: 0.4,
    flexDirection: 'row'
  },
  placesContainer: {
    maxHeight: 'calc(100vh - 56px)'
  },
  placesListContainer: {
    flex: 0.6
  }
};

export const mapStateToProps = (state) => {
  const { auth, clients, places } = state;

  return {
    clients: clients.clients,
    isLoadingClients: clients.isLoading,
    isLoadingPlaceDetails: places.detailsLoading,
    isLoadingPlaces: places.isLoading,
    places: places.places,
    selectedPlaceDetails: places.selectedPlaceDetails,
    user: auth.user
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getClients: () => dispatch(getClients()),
  getPlaceDetails: (data) => dispatch(getPlaceDetails(data)),
  getPlaces: (data) => dispatch(getPlaces(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
