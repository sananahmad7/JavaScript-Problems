// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

const original = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(original) {
  const transpose = original[0].map((_, colIndex) =>
    original.map((row) => row[colIndex])
  );

  const reversed = transpose.map((row, index) => row.reverse());

  return reversed;
}

console.log(rotate(original));
