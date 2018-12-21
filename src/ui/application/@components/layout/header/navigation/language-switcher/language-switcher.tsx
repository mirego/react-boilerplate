// Vendor
import React, {Component} from 'react';
import styled from 'react-emotion/macro';

// Vendor Components
import {withI18n, WithI18n} from 'react-i18next';

const enhance = withI18n();

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

const otherLanguage = (language: string) => {
  return language === 'fr' ? 'en' : 'fr';
};

class LanguageSwitcher extends Component<WithI18n> {
  render() {
    const {i18n} = this.props;

    return (
      <SwitcherButton color="secondary" onClick={this.switchLanguage}>
        {otherLanguage(i18n.language)}
      </SwitcherButton>
    );
  }

  private switchLanguage = () => {
    const {i18n} = this.props;
    i18n.changeLanguage(otherLanguage(i18n.language));
  };
}

export default enhance(LanguageSwitcher);
