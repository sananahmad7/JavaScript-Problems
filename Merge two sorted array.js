function Merge(one, two) {
  one.sort();
  two.sort();
  let sorted = [];
  let i = 0;
  let j = 0;
  while (i < one.length && j < two.length) {
    if (one[i] < two[j]) {
      sorted.push(one[i]);
      i++;
    } else {
      sorted.push(two[j]);
      j++;
    }
  }

  return sorted;
}

const Arr1 = [3, 4, 5, 1, 1, 6, 4, 8, 6];
const Arr2 = [9, 3, 7, 3, 9, 3, 1, 5, 2];

console.log(Merge(Arr1, Arr2));
