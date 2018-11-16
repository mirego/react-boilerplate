// Vendor
import ApolloClient from 'apollo-boost';

// Configurations
import {API_URL} from 'react-boilerplate/configurations/environment';

export const createApolloClient = () => {
  const client = new ApolloClient({uri: API_URL});
  return client;
};

export default createApolloClient;
