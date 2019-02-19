import createApolloClient from './apollo';
import createI18next from './i18next';

const initialize = () => {
  const i18next = createI18next();
  const apolloClient = createApolloClient();

  return {apolloClient, i18next};
};

export default initialize;
