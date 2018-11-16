// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Vendor Styles
import 'simple-css-reset/reset.css';

// Styles
import 'react-boilerplate/styles/global.css';

// Initialize
import initialize from 'react-boilerplate/initializers';

// Components
import Application from 'react-boilerplate/ui/application';

ReactDOM.render(
  <Application {...initialize()} />,
  document.getElementById('root')
);
