import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Devices from './Devices';
import User from './User';

const App = ({ isFetching }) => (
  <div className="container-fluid p-3">
    {isFetching && (
      <div className="mb-3">
        Loading...
      </div>
    )}

    <div className="row">
      <div className="col-6">
        <User />
      </div>

      <div className="col-6">
        <Devices />
      </div>
    </div>
  </div>
);

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default inject((
  { commonStore: { isFetching = false } } = {},
) => ({ isFetching }))(observer(App));
