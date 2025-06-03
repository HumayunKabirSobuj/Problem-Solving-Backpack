// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [
  { title: "Nakshi Kanthar Math", author: "Jasim Uddin", year: 1929 },
  { title: "Padma Nadir Majhi", author: "Manik Bandopadhyay", year: 1936 },
  {
    title: "Lalsalu (Tree Without Roots)",
    author: "Syed Waliullah",
    year: 1948,
  },
  { title: "Ekattorer Dinguli", author: "Jahanara Imam", year: 1986 },
  { title: "Shesher Kobita", author: "Rabindranath Tagore", year: 1929 },
];

const getBookTitles = (arr: Book[]): string[] => {
  return arr.map((book) => book.title);
};

// console.log(getBookTitles(books));
