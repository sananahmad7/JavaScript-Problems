// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(str) {
  const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  //console.log(cleanString);
  const len = cleanString.length;
  for (let i = 0; i < len / 2; i++) {
    if (cleanString[i] !== cleanString[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

const pass = "race a car";
console.log(isPalindrome(pass));
//amanaplanacanalpanama
