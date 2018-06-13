import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../shared/Loader';
import ClientsList from './ClientsList';
import { getClients } from '../actions';

export class HistoryContainer extends Component {
  componentWillMount() {
    this.props.getClients();
  }

  render() {
    const { clients, isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <ClientsList clients={clients} />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer);
