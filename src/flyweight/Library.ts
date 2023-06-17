import Book from "./Book";

interface LibraryBook {
    code: number;
    title: string;
    author: string;
    id: number;
    isTaken: boolean;
}

class Library {
    public books: LibraryBook[] = [];

    getBooks = (): LibraryBook[] => {
        return this.books;
    }

    addBook = (code: number, title: string, author: string, id: number, isTaken: boolean) => {
        const book = Book.createBook(code, title, author);
        this.books.push({
            ...book,
            id,
            isTaken
        })
    }
}

export default Library;