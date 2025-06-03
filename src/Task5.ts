// Write a function that searches an array of objects for a specific person by name.  If found, modify their age property. Print the updated array.

type PersonInfo = {
  name: string;
  age: number;
};

const persons: PersonInfo[] = [
  { name: "Humayun", age: 20 },
  { name: "Juyel", age: 21 },
];

function updateAgeByName(
  arr: PersonInfo[],
  name: string,
  newAge: number
): PersonInfo[] {
  const person = arr.find((p) => p.name === name);
  if (!person) {
    throw new Error("Person not found!");
  } else {
    person.age = newAge;
  }
  return arr;
}

// console.log(updateAgeByName(persons, "Juyel", 32));
