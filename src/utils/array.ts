export const moveElement = (array: any[], from: number, to: number) => {
  const fromElement = array[from];
  const toElement = array[to];

  console.log(fromElement);
  console.log(toElement);

  array[from] = toElement;
  array[to] = fromElement;

  return array;
};
