import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Loader from '../shared/Loader';
import Blade from './Blade';
import ClientsList from './ClientsList';
import ClientInfoCard from './ClientInfoCard';
import { getClients, getPlaces } from '../actions';
import { routeNames } from '../routes';

export class ClientsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientInfoOpen: false,
      clientListOpen: true,
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
    this.setState({
      clientInfoOpen: true,
      clientListOpen: false,
      selectedClient
    })
  )

  render() {
    const { clients, isLoadingClients, isLoadingPlaces } = this.props;

    if (isLoadingClients || isLoadingPlaces) {
      return <Loader />;
    }

    return (
      <div style={styles.container}>
        <Blade
          label="Clients"
          onClick={() => (
            this.setState({
              clientInfoOpen: false,
              clientListOpen: true
            })
          )}
          open={this.state.clientListOpen}
        >
          <ClientsList clients={clients} onPressItem={this.setSelectedClient} />
        </Blade>
        <Blade
          label="Client Info"
          onClick={() => (
            this.setState((prevState) => ({
              clientInfoOpen: prevState.selectedClient,
              clientListOpen: !prevState.selectedClient
            }))
          )}
          open={this.state.clientInfoOpen}
        >
          <ClientInfoCard client={this.state.selectedClient} onSubmit={this.onSubmitOptions} />
        </Blade>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
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
