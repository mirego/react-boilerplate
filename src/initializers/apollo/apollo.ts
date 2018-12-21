// Vendor
import ApolloClient from 'apollo-boost';

// Configurations
import config from 'react-boilerplate/config';

export const createApolloClient = () => {
  const client = new ApolloClient({uri: config.apollo.apiUrl});

  return client;
};

export default createApolloClient;
