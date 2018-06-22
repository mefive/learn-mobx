import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

class App extends React.PureComponent {
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
                123
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
