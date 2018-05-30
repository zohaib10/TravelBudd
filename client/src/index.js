import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myApp from './reducers';

const store = createStore(myApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
