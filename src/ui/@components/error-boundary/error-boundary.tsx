import * as Sentry from '@sentry/browser';
import React, {Component, ErrorInfo, FunctionComponent} from 'react';
import Alert from 'react-boilerplate/ui/@components/alert';
import {useTranslation} from 'react-i18next';

interface State {
  hasError: boolean;
}

const ErrorMessage: FunctionComponent = () => {
  const {t} = useTranslation();

  return <Alert type="danger">{t('fatalError')}</Alert>;
};

export class ErrorBoundary extends Component<{}, State> {
  static getDerivedStateFromError() {
    return {hasError: true};
  }

  state: State = {
    hasError: false
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
