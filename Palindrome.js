function palindrome(str) {
  let len = str.length - 1;
  console.log(len - 1);

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return "Not a Palindrome";
    }
    return "String is a Palindrome";
  }
}

const ok = "madam";
console.log(palindrome(ok));
