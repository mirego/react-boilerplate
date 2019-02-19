import 'react-boilerplate/styles/global.css';

import React from 'react';
import {ApolloProvider} from 'react-apollo';
import initialize from 'react-boilerplate/initializers';
import Application from 'react-boilerplate/ui/application';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter as Router} from 'react-router-dom';

const {apolloClient, i18next} = initialize();

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <I18nextProvider i18n={i18next}>
      <Router>
        <Application />
      </Router>
    </I18nextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
