// Vendor
import React, {SFC} from 'react';
import Loadable, {LoadingComponentProps} from 'react-loadable';

// Types
type Loader<Props> = () => Promise<{default: React.ComponentType<Props>}>;

const Loading: SFC<LoadingComponentProps> = ({pastDelay}) => {
  return pastDelay ? <div>Loading...</div> : null;
};

export default function CreateLoadable<Props>(loader: Loader<Props>) {
  return Loadable({
    loader,
    loading: Loading
  });
}
