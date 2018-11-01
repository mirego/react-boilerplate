// Vendor
import I18next from 'i18next';
import React from 'react';
import {render} from 'react-testing-library';

// Vendor Components
import {I18nextProvider} from 'react-i18next';

const i18nextClient = I18next.init();

const customRender: typeof render = (node, ...options) => {
  return render(
    <I18nextProvider i18n={i18nextClient}>{node}</I18nextProvider>,
    ...options
  );
};

export * from 'react-testing-library';
export {customRender as render};
