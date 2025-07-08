const transactions = [
  { id: 1, category: "Food", amount: 1200, type: "debit" },
  { id: 2, category: "Transport", amount: 800, type: "debit" },
  { id: 3, category: "Food", amount: 500, type: "credit" },
  { id: 4, category: "Entertainment", amount: 1000, type: "credit" },
];

const summary = transactions.reduce(
  (acc, txn) => {
    // Tally total debit and credit
    if (txn.type === "debit") {
      acc.totalDebit += txn.amount;
    } else if (txn.type === "credit") {
      acc.totalCredit += txn.amount;
    }

    // Tally category-wise amount
    if (acc.categories[txn.category]) {
      acc.categories[txn.category] += txn.amount;
    } else {
      acc.categories[txn.category] = txn.amount;
    }

    return acc;
  },
  {
    totalDebit: 0,
    totalCredit: 0,
    categories: {},
  }
);

console.log(summary);
