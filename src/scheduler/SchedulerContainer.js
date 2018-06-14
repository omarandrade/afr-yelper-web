import React, { Component } from 'react';
import { connect } from 'react-redux';
import SchedulerCard from './SchedulerCard';
import { getClients } from '../actions';

export class SchedulerContainer extends Component {
  componentDidMount() {
    // success
  }

  render() {
    let { client, location } = this.props;
    client = client || { name: 'Omar' };
    location = location || { name: 'Pollo loco' };
    return (
      <div style={styles.container}>
        <SchedulerCard client={client} location={location} />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  schedulerContainer: {
    margin: '8px 16px 16px 8px'
  }
};

export const mapStateToProps = (state) => {
  const { clients, places } = state;

  return {
    clients: clients.clients,
    isLoading: clients.isLoading,
    location: places.selectedPlace
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getClients: () => dispatch(getClients())
});

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerContainer);
