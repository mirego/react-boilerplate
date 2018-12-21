// Utilities
const parseEnvBoolean = (value: string, fallback: boolean = false) => {
  let bool = fallback;

  try {
    bool = Boolean(JSON.parse(value));
  } catch (_error) {}

  return bool;
};

// Configuration
import {version} from '../../package.json';

// tslint:disable no-non-null-assertion
const config = {
  application: {
    version
  },

  apollo: {
    apiUrl: process.env.REACT_APP_API_URL!
  },

  versionNumber: {
    show: parseEnvBoolean(process.env.REACT_APP_SHOW_VERSION_NUMBER!)
  }
};

// tslint:disable-next-line no-var-requires prefer-template
const envConfig: Partial<typeof config> = require('./' + process.env.NODE_ENV);

export default {...config, ...envConfig};
