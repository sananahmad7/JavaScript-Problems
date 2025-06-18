function intersect(nums1, nums2) {
  let map = {};
  let result = [];
  for (const element of nums1) {
    map[element] = (map[element] || 0) + 1;
  }

  for (const element of nums2) {
    if (map[element] > 0) {
      result.push(element);
      map[element]--;
    }
  }

  return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersect(nums1, nums2));
