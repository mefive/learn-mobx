import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const propTypes = {
  userStore: PropTypes.shape({
    user: PropTypes.shape({}),
    fetchUser: PropTypes.func,
  }),
};

const defaultProps = {
  userStore: {},
};

@inject(({ userStore }) => ({ userStore }))
@observer
class User extends React.Component {
  render() {
    console.log('render user');
    const { userStore } = this.props;

    return (
      <div className="card">
        <div className="card-header">
          Devices
        </div>

        <div className="card-body">
          <div>
            {JSON.stringify(userStore.user)}
          </div>

          <div className="mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => userStore.fetchUser()}
            >
              Fetch user
            </button>
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;
