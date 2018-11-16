// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Application from './application';

// Initializers
import initialize from 'react-boilerplate/initializers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Application {...initialize()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
