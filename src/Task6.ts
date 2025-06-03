// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const sumEvenNumbers = (arr: number[]): number => {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};

// console.log(sumEvenNumbers(numbers)); 
