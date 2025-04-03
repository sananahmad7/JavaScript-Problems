function removeDuplicates(nums) {
  let writeIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  return writeIndex;
}
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(nums.slice(0, k));
