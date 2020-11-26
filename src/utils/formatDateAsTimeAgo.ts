import { formatDuration, differenceInSeconds } from 'date-fns';

const MINUTE = 60;
const HOUR = 60 * 60;
const DAY = 60 * 60 * 24;
const WEEK = 60 * 60 * 24 * 7;
const MONTH = 60 * 60 * 24 * 30;
const YEAR = 60 * 60 * 24 * 30 * 12;

export default function formatDateAsTimeAgo(date: Date): string {
  const diffInSeconds = Math.abs(differenceInSeconds(new Date(), date));
  let time = '';

  if (diffInSeconds < MINUTE) {
    // A minute ago
    time = 'less than a minute';
  }
  if (diffInSeconds < HOUR) {
    // X minutes ago
    time = formatDuration({
      minutes: Math.round(diffInSeconds / MINUTE),
    });
  }
  if (diffInSeconds < DAY) {
    // X hours ago
    time = formatDuration({
      hours: Math.round(diffInSeconds / HOUR),
    });
  } else if (diffInSeconds < WEEK) {
    // x days ago
    time = formatDuration({
      days: Math.round(diffInSeconds / DAY),
    });
  } else if (diffInSeconds < MONTH) {
    // x weeks ago
    time = formatDuration({
      weeks: Math.round(diffInSeconds / WEEK),
    });
  } else if (diffInSeconds < YEAR) {
    // x months ago
    time = formatDuration({
      months: Math.round(diffInSeconds / MONTH),
    });
  } else {
    // x years ago
    time = formatDuration({
      years: Math.round(diffInSeconds / YEAR),
    });
  }

  return `${time} ago`;
}
