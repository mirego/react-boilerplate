// Vendor
import React, {FunctionComponent} from 'react';

// Vendor Components
import {ApolloProvider} from 'react-apollo';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Route Components
import About from 'react-boilerplate/ui/about';
import Home from 'react-boilerplate/ui/home';

// Components
import Layout from './@components/layout';
import Version from './@components/version';

// Vendor Types
import {ApolloClient} from 'apollo-boost';
import I18next from 'i18next';

// Types
interface Props {
  apolloClient: ApolloClient<any>;
  i18next: I18next.i18n;
}

const Application: FunctionComponent<Props> = ({apolloClient, i18next}) => (
  <ApolloProvider client={apolloClient}>
    <I18nextProvider i18n={i18next}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>

          <Version />
        </Layout>
      </Router>
    </I18nextProvider>
  </ApolloProvider>
);

export default Application;
