export default function range(length: number): Array<number> {
  const array = [];

  for (let i = 0; i <= length; i += 1) {
    array.push(i);
  }

  return array;
}
