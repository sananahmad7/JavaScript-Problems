function firstNonRepeatingChar(str) {
  const countMap = {};

  // First pass: count the frequency of each character
  for (let char of str) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  // Second pass: find the first character with frequency 1
  for (let char of str) {
    if (countMap[char] === 1) {
      return char;
    }
  }

  return null;
}

// Test cases
console.log(firstNonRepeatingChar("aabbccddeefg")); // Output: "f"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
