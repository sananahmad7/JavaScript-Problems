const students = [
  { name: "Ali", age: 18, passed: false },
  { name: "Zara", age: 19, passed: false },
  { name: "Ahmed", age: 20, passed: true },
  { name: "Sara", age: 21, passed: true },
];

const passed = students.find((student) => student.passed === true);

console.log(passed);
