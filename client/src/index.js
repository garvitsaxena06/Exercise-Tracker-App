import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
