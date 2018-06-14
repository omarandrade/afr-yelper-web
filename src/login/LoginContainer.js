import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Loader from '../shared/Loader';
import Login from './Login';
import { login } from '../actions';
import { routeNames } from '../routes';

export class LoginContainer extends Component {
  componentWillMount() {
    this.checkRouting(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkRouting(nextProps);
  }

  checkRouting = (props) => {
    if (props.isLoggedIn) {
      browserHistory.replace(`/${routeNames.clients}`);
    }
  }

  render() {
    if (this.props.isLoading) {
      return <Loader />;
    }

    return (
      <div style={styles.container}>
        <Login onSubmit={this.props.login} />
      </div>
    );
  }
}

const styles = {
  container: {
    bottom: 0,
    height: '40vh',
    left: 0,
    margin: 'auto',
    maxHeight: 480,
    maxWidth: 512,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '60vw'
  }
};

export const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    isLoading: auth.isLoading,
    isLoggedIn: auth.isLoggedIn
  };
};

export const mapDispatchToProps = (dispatch) => ({
  login: (data) => (
    dispatch(login(data))
      .then(() => browserHistory.push(`/${routeNames.clients}`))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
