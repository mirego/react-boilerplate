import React, {FunctionComponent, Suspense} from 'react';
import ErrorBoundary from 'react-boilerplate/ui/@components/error-boundary';
import Spinner from 'react-boilerplate/ui/@components/spinner';
import About from 'react-boilerplate/ui/about';
import Home from 'react-boilerplate/ui/home';
import {Route, Switch} from 'react-router-dom';
import Layout from './@components/layout';
import Version from './@components/version';

const Application: FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<Spinner size={40} />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </ErrorBoundary>

        <Version />
      </Layout>
    </ErrorBoundary>
  );
};

export default Application;
