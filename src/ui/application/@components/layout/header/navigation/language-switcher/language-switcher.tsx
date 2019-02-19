import styled from '@emotion/styled/macro';
import React, {FunctionComponent, useCallback} from 'react';
import {useTranslation} from 'react-i18next';

const SwitcherButton = styled.button`
  margin: 15px;
  text-decoration: none;
  font-size: 18px;
  color: #61dafb;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const LanguageSwitcher: FunctionComponent = () => {
  const {i18n} = useTranslation();
  const nextLanguage = i18n.language === 'fr' ? 'en' : 'fr';
  const switchLanguage = useCallback(() => {
    i18n.changeLanguage(nextLanguage);
  }, [i18n.changeLanguage, nextLanguage]);

  return (
    <SwitcherButton color="secondary" onClick={switchLanguage}>
      {nextLanguage}
    </SwitcherButton>
  );
};

export default LanguageSwitcher;
