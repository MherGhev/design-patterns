class Book {
    public code: number;
    public title: string;
    public author: string;

    static books: Book[] = [];

    constructor(code: number, title: string, author: string) {
        this.code = code;
        this.title = title;
        this.author = author;
        Book.books.push(this)
    }

    static createBook = (code: number, title: string, author: string): Book => {
        for (let book of Book.books) {
            if (book.code === code) return book
        }
        return new Book(code, title, author);
    }
}


export default Book;