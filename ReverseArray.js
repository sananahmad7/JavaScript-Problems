//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function Reverse(nums, k) {
  let n = nums.length;
  k = k % n;
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    temp[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = temp[i];
  }

  return nums;
}

var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
console.log(Reverse(nums, k));
