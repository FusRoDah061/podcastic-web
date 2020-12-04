export default function random(
  min = 0,
  maxExclusive = Number.MAX_SAFE_INTEGER,
): number {
  return Math.random() * (maxExclusive - min) + min;
}
