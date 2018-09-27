// Vendor
import React, {ChangeEvent, Component} from 'react';

// Vendor Components
import {
  InjectedI18nProps,
  InjectedTranslateProps,
  translate
} from 'react-i18next';

// Types
import {Language} from 'react-boilerplate/types/language';

interface Props {}

type EnhancedProps = Props & InjectedI18nProps & InjectedTranslateProps;

const enhance = translate();

class LanguagePicker extends Component<EnhancedProps> {
  public render() {
    const {t, i18n} = this.props;

    return (
      <select value={i18n.language} onChange={this.handleChange}>
        <option value={Language.French}>{t(`languages.french`)}</option>

        <option value={Language.English}>{t(`languages.english`)}</option>
      </select>
    );
  }

  private handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.props.i18n.changeLanguage(event.target.value);
  };
}

export default enhance(LanguagePicker);
