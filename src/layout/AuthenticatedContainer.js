import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Loader from '../shared/Loader';
import { routeNames } from '../routes';

export class AuthenticatedContainer extends Component {
  componentWillMount() {
    this.checkRouting(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkRouting(nextProps);
  }

  checkRouting = (props) => {
    if (!props.isLoggedIn) {
      browserHistory.replace(`/${routeNames.login}`);
    }
  }

  render() {
    const { children, isLoggedIn, isLoading } = this.props;

    if (!isLoggedIn) {
      return null;
    } else if (isLoading) {
      return <Loader />;
    }

    return children;
  }
}

export const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    isLoading: auth.isLoading,
    isLoggedIn: auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(AuthenticatedContainer);
