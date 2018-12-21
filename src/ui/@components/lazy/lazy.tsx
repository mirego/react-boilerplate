// Vendor
import React, {FunctionComponent} from 'react';
import Lazy, {LoadingComponentProps} from 'react-loadable';

// Vendor Components
import {NamespacesConsumer as I18n} from 'react-i18next';

// Types
type Loader<Props> = () => Promise<{default: React.ComponentType<Props>}>;

const Loading: FunctionComponent<LoadingComponentProps> = ({
  error,
  pastDelay
}) => {
  if (error) throw error;

  return pastDelay ? (
    <div>
      <I18n>{t => t('loading')}</I18n>
    </div>
  ) : null;
};

export default function CreateLazy<Props>(loader: Loader<Props>) {
  return Lazy({
    loader,
    loading: Loading
  });
}
