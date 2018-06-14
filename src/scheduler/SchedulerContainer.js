import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';
import Loader from '../shared/Loader';
import ClientInfoCard from '../clients/ClientInfoCard';
import PlacesContainer from '../places/PlacesContainer';
import SchedulerCard from './SchedulerCard';
import { getClients } from '../actions';

export class ClientsContainer extends Component {
  componentWillMount() {
    this.props.getClients();
  }

  render() {
    const { selectedClient, isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div style={styles.container}>
        <div style={styles.clientColumnContainer}>
          <Card style={styles.clientColumnCard} />
        </div>
        <div style={styles.clientInfoContainer}>
          <ClientInfoCard client={selectedClient} />
        </div>
        <div style={styles.placesContainer}>
          <PlacesContainer />
        </div>
        <div style={styles.placesContainer}>
          <SchedulerCard />
        </div>
      </div>
    );
  }
}

const styles = {
  clientInfoContainer: {
    flex: 0.3,
    margin: '8px 16px 16px 8px'
  },
  clientListColumnCard: {
    flex: 0.1,
    margin: '16px 8px 16px 16px'
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  placesContainer: {
    flex: 0.3,
    margin: '8px 16px 16px 8px'
  },
  schedulerContainer: {
    flex: 0.3,
    margin: '8px 16px 16px 8px'
  }
};

export const mapStateToProps = (state) => {
  const { clients } = state;

  return {
    clients: clients.clients,
    isLoading: clients.isLoading
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getClients: () => dispatch(getClients())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
