const reverseString = (array) => {
  last = array.length - 1;
  first = 0;
  console.log(last);
  let temp;
  while (first < last) {
    temp = array[first];
    array[first] = array[last];
    array[last] = temp;
    first++;
    last--;
  }

  return array;
};
// l e l h
const array = ["h", "e", "l", "l"];

console.log(reverseString(array));
