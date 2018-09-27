// Vendor
import React, {SFC} from 'react';

// Vendor Components
import {ApolloProvider} from 'react-apollo';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Route Components
import About from 'react-boilerplate/ui/about';
import Home from 'react-boilerplate/ui/home';

// Components
import Layout from './@components/layout';

// Services
import ApolloService from 'react-boilerplate/services/apollo';
import I18nextService from 'react-boilerplate/services/i18next';

const Application: SFC = () => (
  <ApolloProvider client={ApolloService.client}>
    <I18nextProvider i18n={I18nextService.i18n}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Layout>
      </Router>
    </I18nextProvider>
  </ApolloProvider>
);

export default Application;
