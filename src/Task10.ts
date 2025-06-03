// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.

type Item = {
  quantity: number;
  price: number;
};

const items: Item[] = [
  { quantity: 2, price: 100 },
  { quantity: 1, price: 200 },
  { quantity: 1, price: 150 },
];

function calculateTotalValue(arr: Item[]): number {
  return arr.reduce((total, item) => total + item.quantity * item.price, 0);
}

// console.log(calculateTotalValue(items)); 
