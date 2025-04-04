const orders = [
  { id: 1, delivered: true },
  { id: 2, delivered: false },
  { id: 3, delivered: true },
];

const Status = orders.map((item) => {
  return ` Order #${item.id} ${item.delivered ? "Delivered" : "Pending"}`;
});

console.log(Status);
