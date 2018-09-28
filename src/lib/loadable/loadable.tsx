// Vendor
import React, {SFC} from 'react';
import Loadable, {LoadingComponentProps} from 'react-loadable';

// Types
type Loader = () => Promise<{default: React.ComponentType}>;

const Loading: SFC<LoadingComponentProps> = ({pastDelay}) => {
  return pastDelay ? <div>Loading...</div> : null;
};

export default (loader: Loader) => {
  return Loadable({
    loader,
    loading: Loading
  });
};
