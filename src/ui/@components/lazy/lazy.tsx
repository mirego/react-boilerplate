// Vendor
import React, {SFC} from 'react';
import Lazy, {LoadingComponentProps} from 'react-loadable';

// Types
type Loader<Props> = () => Promise<{default: React.ComponentType<Props>}>;

const Loading: SFC<LoadingComponentProps> = ({error, pastDelay}) => {
  if (error) throw error;
  return pastDelay ? <div>Loading...</div> : null;
};

export default function CreateLazy<Props>(loader: Loader<Props>) {
  return Lazy({
    loader,
    loading: Loading
  });
}
