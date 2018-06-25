import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { autorun } from 'mobx';
import userStore from './store/userStore';

import App from './App';

function init() {
  userStore.fetchUser();

  ReactDOM.render(
    <Provider store={{ userStore }}>
      <App />
    </Provider>,
    document.querySelector('#main'),
  );
}

window.addEventListener('load', init);

