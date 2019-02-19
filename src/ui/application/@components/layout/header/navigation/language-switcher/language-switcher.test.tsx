import I18next from 'i18next';
import React from 'react';
import {fireEvent, render} from 'react-boilerplate/test-utils';
import {I18nextProvider} from 'react-i18next';
import LanguageSwitcher from './language-switcher';

jest.unmock('react-i18next');

it('toggles language between french and english', async () => {
  await I18next.init({lng: 'fr'});

  const {getByText} = render(
    <I18nextProvider i18n={I18next}>
      <LanguageSwitcher />
    </I18nextProvider>
  );

  // Current language is french so the caption is `en`
  let languageSwitcherButton = getByText('en');

  // Clicking will switch to english
  fireEvent.click(languageSwitcherButton);
  expect(I18next.language).toBe('en');

  // Current language is english so the caption is `fr`
  languageSwitcherButton = getByText('fr');

  // Clicking will switch to french
  fireEvent.click(languageSwitcherButton);
  expect(I18next.language).toBe('fr');

  // Current language is back to french so the caption is `en`
  getByText('en');
});
