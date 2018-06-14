import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Card } from '@material-ui/core';
// import Loader from '../shared/Loader';
import SchedulerCard from './SchedulerCard';
import { getClients } from '../actions';

export class SchedulerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {
        name: 'Omar'
      },
      location: {
        name: 'pollo loco'
      }
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <SchedulerCard client={this.state.client} location={this.state.location} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerContainer);
