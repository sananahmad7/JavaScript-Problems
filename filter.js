// Using .filter(), return only users who:

// Have an active subscription

// Are on the "premium" plan

// Are age 21 or older

const users = [
  { name: "Ali", age: 25, subscription: { status: "active", plan: "premium" } },
  {
    name: "Sara",
    age: 30,
    subscription: { status: "inactive", plan: "basic" },
  },
  { name: "Zain", age: 19, subscription: { status: "active", plan: "basic" } },
  {
    name: "Fatima",
    age: 22,
    subscription: { status: "active", plan: "premium" },
  },
  {
    name: "Ahmed",
    age: 35,
    subscription: { status: "inactive", plan: "premium" },
  },
];

const filteredArray = users.filter(
  (user) =>
    user.subscription.status === "active" &&
    user.subscription.plan === "premium" &&
    user.age >= 21
);

console.log(filteredArray);
