import React, { Component } from 'react';
import { Icon } from '@material-ui/core';
import { Map, RecentActors } from '@material-ui/icons';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Loader from '../shared/Loader';
import ClientsList from './ClientsList';
import ClientInfoCard from './ClientInfoCard';
// import PlaceOptionsCard from './PlaceOptionsCard';
import { getClients, getPlaces } from '../actions';
import { routeNames } from '../routes';

export class ClientsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedClient: null
    };
  }

  componentWillMount() {
    this.props.getClients();
  }

  onSubmitOptions = (data) => {
    this.props.getPlaces({
      ...data,
      grade: this.state.selectedClient.grade,
      id: this.state.selectedClient.id,
      location: 53202
    });
  }

  setSelectedClient = (selectedClient) => (
    this.setState({ selectedClient })
  )

  render() {
    const { clients, isLoadingClients, isLoadingPlaces } = this.props;

    if (isLoadingClients || isLoadingPlaces) {
      return <Loader />;
    }

    return (
      <div style={styles.container}>
        <div style={styles.clientListContainer}>
          <ClientsList clients={clients} onPressItem={this.setSelectedClient} />
        </div>
        <div style={styles.infoContainer}>
          <div style={styles.clientInfoContainer}>
            {
              this.state.selectedClient ?
                <ClientInfoCard
                  client={this.state.selectedClient}
                  onSubmit={this.onSubmitOptions}
                /> :
                <div style={styles.clientPlaceholderContainer}>
                  <Icon style={styles.placeholderIconContainer} ><RecentActors style={styles.placeholderIcon} /></Icon>
                </div>
            }
          </div>
        </div>
        <div style={styles.placesPlaceholderContainer}>
          <Icon style={styles.placeholderIconContainer} ><Map style={styles.placeholderIcon} /></Icon>
        </div>
      </div>
    );
  }
}

const styles = {
  clientInfoContainer: {
    margin: '8px 16px 16px 8px'
  },
  clientListContainer: {
    flex: 0.4,
    margin: '16px 8px 16px 16px'
  },
  clientPlaceholderContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 0.4,
    justifyContent: 'center',
    margin: '16px 16px 8px 8px'
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  infoContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  optionsContainer: {
    flex: 0.4,
    margin: '16px 16px 8px 8px'
  },
  placeholderIcon: {
    fontSize: '100',
    opacity: '.6'
  },
  placeholderIconContainer: {
    display: 'flex',
    height: '100px',
    width: '100px'
  },
  placesPlaceholderContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 0.2,
    justifyContent: 'center',
    margin: '16px 16px 8px 8px'
  }
};

export const mapStateToProps = (state) => {
  const { clients, places } = state;

  return {
    clients: clients.clients,
    isLoadingClients: clients.isLoading,
    isLoadingPlaces: places.isLoading
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getClients: () => dispatch(getClients()),
  getPlaces: (data) => (
    dispatch(getPlaces(data))
      .then((result) => {
        if (result.ok) {
          browserHistory.push(`/${routeNames.places}`);
        }
      })
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
