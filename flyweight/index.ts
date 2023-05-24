import Library from "./Library";
import Book from "./Book";

const library = new Library();

library.addBook(1234, "Book1", "Author1", 1, false);
library.addBook(1234, "Book1", "Author1", 2, true);
library.addBook(5678, "Book2", "Author2", 3, true);
library.addBook(5678, "Book2", "Author2", 4, false);
library.addBook(1357, "Book3", "Author3", 5, true);


console.log(library.books);
console.log(Book.books);