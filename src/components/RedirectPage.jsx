import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';
export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }
  render() {
    return null;
  }
}

// Here, we have added a componentDidMount lifecycle method to access the URL parameters and store them in local storage. We’re calling the getParamValues function by passing the URL values available in location.hash.

// The expires_in value is in seconds (&expires_in=3600) so we’re converting it to milliseconds by multiplying it by 1000 and then adding it to the milliseconds at the current time