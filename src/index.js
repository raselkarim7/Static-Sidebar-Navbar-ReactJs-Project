import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

//import 'react-widgets/dist/css/react-widgets.css';
//import '../style/style.css'; // Uncommenting this cause problem Because , style-loader, css-loader not properly intalled.

import App from './components/common/app.js';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.getElementById('app')
);
