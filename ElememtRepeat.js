//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(array) {
  let freqMap = {};

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    if (freqMap[num]) {
      // Duplicate found
      console.log(`${num} is a duplicate`);
      return true;
    } else {
      freqMap[num] = 1;
    }
  }

  // No duplicates found
  return false;
}

const a = [1, 2, 3, 4, 1];
console.log(containsDuplicate(a)); // Output: true
