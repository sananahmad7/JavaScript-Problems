function firstUniqChar(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      if (arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return i;
    }
  }

  return -1;
}

const s = "leetcode";
console.log("Output: ", firstUniqChar(s));
