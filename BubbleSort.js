function BubbleSort(array) {
  const n = array.length;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const array = [5, 1, 4, 2, 8];
console.log(BubbleSort(array));
