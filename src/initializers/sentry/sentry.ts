import * as Sentry from '@sentry/browser';
import config from 'react-boilerplate/config';

const initializeSentry = () => {
  Sentry.init({
    dsn: config.sentry.dsn,
    enabled: Boolean(config.sentry.dsn),
    environment: config.sentry.environment,
    release: config.application.version
  });
};

export default initializeSentry;
