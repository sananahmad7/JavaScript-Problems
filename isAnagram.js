//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const isAnagram = (one, two) => {
  if (one.length !== two.length) {
    return false;
  }
  const freqMap = {};
  for (let i = 0; i < one.length; i++) {
    let num = one[i];
    if (freqMap[num]) {
      freqMap[num]++;
    } else {
      freqMap[num] = 1;
    }
  }

  for (let i = 0; i < two.length; i++) {
    let check = two[i];
    if (freqMap[check]) {
      freqMap[check]--;
    } else {
      return false;
    }
  }
  return true;
};

const one = "rat";
const two = "car";

console.log(isAnagram(one, two));
