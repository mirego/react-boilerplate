import React, {useState} from 'react';
import initEnvironment from './create-relay-environment';
import {fetchQuery, ReactRelayContext, GraphQLTaggedNode} from 'react-relay';
import {NextFunctionComponent, NextComponentType} from 'next';

interface Options {
  query?: GraphQLTaggedNode;
}

const withData = (
  ComposedComponent: NextComponentType<any, any>,
  options: Options = {}
) => {
  const WithData: NextFunctionComponent<any, any> = props => {
    const [environment] = useState(() =>
      initEnvironment({
        records: props.queryRecords
      })
    );

    return (
      <ReactRelayContext.Provider value={{environment, variables: {}}}>
        <ComposedComponent {...props} />
      </ReactRelayContext.Provider>
    );
  };

  WithData.displayName = `WithData(${ComposedComponent.displayName})`;

  WithData.getInitialProps = async ctx => {
    // Evaluate the composed component's getInitialProps()
    let composedInitialProps: any = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }

    let queryProps = {};
    let queryRecords = {};
    const environment = initEnvironment();

    if (options.query) {
      const variables = composedInitialProps.relayVariables || {};
      // TODO: Consider RelayQueryResponseCache
      // https://github.com/facebook/relay/issues/1687#issuecomment-302931855
      queryProps = await fetchQuery(environment, options.query, variables);
      queryRecords = environment
        .getStore()
        .getSource()
        .toJSON();
    }

    return {
      ...composedInitialProps,
      ...queryProps,
      queryRecords
    };
  };
};

export default withData;
