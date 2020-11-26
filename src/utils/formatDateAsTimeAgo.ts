export default function formatDateAsTimeAgo(msLength: number): string {
  // https://stackoverflow.com/a/21294619/9214463
  const minutes = Math.floor(msLength / 60000);
  const seconds = Number(((msLength % 60000) / 1000).toFixed(0));
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}m`;
}
