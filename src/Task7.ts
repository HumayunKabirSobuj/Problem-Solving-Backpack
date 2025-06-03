// Write a function that determines whether a given year is a leap year.Example: Happy New Year

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// console.log(isLeapYear(2024)); 
// console.log(isLeapYear(2023)); 
