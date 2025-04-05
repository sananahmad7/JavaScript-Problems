let maxP = 0;
function maxProfit(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] < list[i + 1]) {
      maxP += list[i + 1] - list[i];
    }
  }
  return maxP;
}
const list = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(list));
