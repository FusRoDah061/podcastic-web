import { formatDuration, differenceInSeconds } from 'date-fns';
import { createIntl } from 'react-intl';
import { LANGUAGES } from '../i18n/config';
import translations from '../i18n/translations';
import dateLocales from './dateLocales';
import { getLocale } from './localeUtils';

const MINUTE = 60;
const HOUR = 60 * 60;
const DAY = 60 * 60 * 24;
const WEEK = 60 * 60 * 24 * 7;
const MONTH = 60 * 60 * 24 * 30;
const YEAR = 60 * 60 * 24 * 30 * 12;

export default function formatDateAsTimeAgo(
  date: Date,
  locale: string = getLocale(),
): string {
  const localeObj = dateLocales[locale];
  const defaultLocale = LANGUAGES.languages[LANGUAGES.default];

  const intl = createIntl({
    locale,
    defaultLocale,
    messages: translations[locale],
  });

  const diffInSeconds = Math.abs(differenceInSeconds(new Date(), date));
  let time = '';

  if (diffInSeconds < MINUTE) {
    // A minute ago
    time = intl.formatMessage({
      id: 'formatDateAsTimeAgo.lessThanAMinute',
      defaultMessage: 'less than a minute',
    });
  }
  if (diffInSeconds < HOUR) {
    // X minutes ago
    time = formatDuration(
      {
        minutes: Math.round(diffInSeconds / MINUTE),
      },
      { locale: localeObj },
    );
  }
  if (diffInSeconds < DAY) {
    // X hours ago
    time = formatDuration(
      {
        hours: Math.round(diffInSeconds / HOUR),
      },
      { locale: localeObj },
    );
  } else if (diffInSeconds < WEEK) {
    // x days ago
    time = formatDuration(
      {
        days: Math.round(diffInSeconds / DAY),
      },
      { locale: localeObj },
    );
  } else if (diffInSeconds < MONTH) {
    // x weeks ago
    time = formatDuration(
      {
        weeks: Math.round(diffInSeconds / WEEK),
      },
      { locale: localeObj },
    );
  } else if (diffInSeconds < YEAR) {
    // x months ago
    time = formatDuration(
      {
        months: Math.round(diffInSeconds / MONTH),
      },
      { locale: localeObj },
    );
  } else {
    // x years ago
    time = formatDuration(
      {
        years: Math.round(diffInSeconds / YEAR),
      },
      { locale: localeObj },
    );
  }

  return intl.formatMessage(
    {
      id: 'formatDateAsTimeAgo.ago',
      defaultMessage: '{time} ago',
    },
    {
      time,
    },
  );
}
