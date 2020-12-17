/* eslint-disable import/no-duplicates */
import { format } from 'date-fns';
import dateLocales from './dateLocales';
import { getLocale } from './localeUtils';

const formatDate = (date: Date, locale: string = getLocale()): string => {
  return format(date, 'dd/MM/yyyy', {
    locale: dateLocales[locale],
  });
};

export default formatDate;
