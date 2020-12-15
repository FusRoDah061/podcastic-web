import { LANGUAGES } from '../i18n/config';

function getQueryLocale(): string | null {
  const query = new URLSearchParams(window.location.search);
  const lang = query.get('lang');

  if (lang) {
    return LANGUAGES.languages[lang];
  }

  return lang;
}

function getEnvironmentLocale(): string {
  return navigator.language;
}

function getConfigLocale(): string {
  return LANGUAGES.languages[LANGUAGES.default];
}

export function getLocale(): string {
  return getQueryLocale() || getEnvironmentLocale() || getConfigLocale();
}

export function getShortLocale(): string {
  const locale =
    getQueryLocale() || getEnvironmentLocale() || getConfigLocale();

  if (locale && locale.includes('-')) {
    return locale.split('-')[0];
  }

  return locale;
}
