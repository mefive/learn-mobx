import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const propTypes = {
  devicesStore: PropTypes.shape({
    devices: PropTypes.shape({}),
    fetchDevices: PropTypes.func,
  }),
};

const defaultProps = {
  devicesStore: {},
};

@inject(({ devicesStore }) => ({ devicesStore }))
@observer
class Devices extends React.Component {
  render() {
    console.log('render devices');
    const { devicesStore } = this.props;

    return (
      <div className="card">
        <div className="card-header">
          Devices
        </div>

        <div className="card-body">
          <div>
            {JSON.stringify(devicesStore.devices)}
          </div>

          <div className="mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => devicesStore.fetchDevices()}
            >
              Fetch devices
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Devices.propTypes = propTypes;
Devices.defaultProps = defaultProps;

export default Devices;
