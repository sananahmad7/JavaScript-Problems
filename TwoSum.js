//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
  const map = new Map(); // Create a hash map to store value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // The value we're looking for

    // If the complement exists in the map, return the indices
    if (map.has(complement)) {
      return [map.get(complement), i]; // Return the index of the complement and current index
    }

    // Otherwise, store the current number and its index
    //console.log(nums[i], i);
    map.set(nums[i], i);
  }
};

const target = 9;
const nums = [2, 11, 7, 15];
console.log(twoSum(nums, target)); // Output: [0, 2]
