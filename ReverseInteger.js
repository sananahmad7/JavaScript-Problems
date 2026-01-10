//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const reverse = (x) => {
  // 1. Define the 32-bit limits
  const LIMIT = 2147483648; // 2^31

  // 2. Handle negative numbers
  // We work with the absolute value to make the loop easier
  const isNegative = x < 0;
  let num = Math.abs(x);
  let reversed = 0;

  while (num > 0) {
    // Get the last digit (e.g., 123 % 10 = 3)
    const lastDigit = num % 10;

    // Add it to our result
    // (Move existing digits left by multiplying by 10, then add new one)
    reversed = reversed * 10 + lastDigit;

    // Remove the last digit from the original number
    // (Use Math.floor because JS division creates decimals)
    num = Math.floor(num / 10);
  }

  // 3. Apply the sign back
  if (isNegative) {
    reversed = -reversed;
  }

  // 4. The "Overflow" Check
  // If the number is outside the signed 32-bit range, return 0
  if (reversed > LIMIT - 1 || reversed < -LIMIT) {
    return 0;
  }

  return reversed;
};

console.log(reverse(23289));
