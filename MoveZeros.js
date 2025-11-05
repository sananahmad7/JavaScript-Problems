//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function MoveZeros(nums) {
  let lastNonZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap non-zero element with the leftmost zero position
      [nums[lastNonZero], nums[i]] = [nums[i], nums[lastNonZero]];
      lastNonZero++;
    }
  }
  return nums;
}

const nums = [0, 1, 0, 3, 12];

console.log(MoveZeros(nums));
