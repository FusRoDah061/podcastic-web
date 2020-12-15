import React from 'react';
import { IntlProvider } from 'react-intl';
import { LANGUAGES } from '../i18n/config';
import translations from '../i18n/translations';
import { getLocale } from '../utils/localeUtils';

const IntlProviderConfigured: React.FC = ({ children }) => {
  const locale = getLocale();
  const defaultLocale = LANGUAGES.languages[LANGUAGES.default];

  console.log('locale: ', locale);
  console.log('defaultLocale: ', defaultLocale);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={translations[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default IntlProviderConfigured;
