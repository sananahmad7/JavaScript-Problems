function mostFrequentNumber(arr) {
  let frequencyMap = {};

  let count = 1;

  let mostFrequent = arr[0];
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (frequencyMap[num]) {
      frequencyMap[num] = frequencyMap[num] + 1;
    } else {
      frequencyMap[num] = 1;
    }

    if (frequencyMap[num] > maxCount) {
      maxCount = frequencyMap[num];
      mostFrequent = num;
    }
  }

  return mostFrequent;
}
let arr = [1, 1, 3, 1, 1, 0, 2, 3, 3, 4];
console.log(mostFrequentNumber(arr));
