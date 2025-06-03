// Write three functions: one to square a number, one to double a number, and one to add 5 to a number.
// Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

function square(num: number): number {
  return num * num;
}

function double(num: number): number {
  return num * 2;
}

function addFive(num: number): number {
  return num + 5;
}

function composedTheFunctions(num: number): number {
  return addFive(double(square(num)));
}

// console.log(composedTheFunctions(3));