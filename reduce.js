const users = [
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "Marketing" },
  { name: "Charlie", department: "Engineering" },
  { name: "David", department: "Marketing" },
  { name: "Eve", department: "Sales" },
];

const dep = users.reduce((acc, user) => {
  let d = user.department;
  if (acc[d]) {
    acc[d].push(user.name);
  } else {
    acc[d] = [user.name];
  }

  return acc;
}, {});

console.log(dep);
