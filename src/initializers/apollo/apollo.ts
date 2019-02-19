import ApolloClient from 'apollo-boost';
import config from 'react-boilerplate/config';

const initializeApollo = () => {
  return new ApolloClient({uri: config.apollo.apiUrl});
};

export default initializeApollo;
