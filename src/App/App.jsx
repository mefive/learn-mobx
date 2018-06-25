import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

const propTypes = {
  userStore: PropTypes.shape({
    user: PropTypes.shape({}),
    fetchUser: PropTypes.func,
  }),
};

const defaultProps = {
  userStore: {},
};

// @inject(({ userStore }) => ({ userStore }))
@inject('userStore')
@observer
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                Demo
              </div>
              <div className="card-body">
                <div>
                  {JSON.stringify(this.props.userStore.user)}
                </div>

                <div className="mt-2">
                  <div className="btn-primary btn">
                    获取用户
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
