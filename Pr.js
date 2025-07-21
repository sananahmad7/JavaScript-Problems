const mostFrequentNumber = (array) => {
  let map = {};
  let mostFrequent = array[0];
  let maxCount = 0;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (map[num]) {
      map[num] = map[num] + 1;
    } else {
      map[num] = 1;
    }

    if (map[num] > maxCount) {
      mostFrequent = num;
      maxCount = map[num];
    }
  }
  return mostFrequent;
};

let arr = [1, 1, 3, 1, 1, 0, 2, 3, 3, 4];
console.log(mostFrequentNumber(arr));
