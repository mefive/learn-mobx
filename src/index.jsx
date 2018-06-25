import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import * as stores from './stores';
import App from './App';

function init() {
  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.querySelector('#main'),
  );
}

window.addEventListener('load', init);
