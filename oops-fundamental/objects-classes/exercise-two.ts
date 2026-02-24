class Book {
    private title: string;
    private author: string;
    private isbn: string;
    private isAvailable: boolean;


    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    borrowBook(): boolean {

        if(!this.isAvailable) {
            console.log('This book is not available to borrow');
            return false;
        }
        this.isAvailable = false;
        return false;
    }

    returnBook(): void {
        this.isAvailable = true;
    }


    displayInfo(): void {
        console.log(`${this.title} by ${this.author} (ISBN ${this.isbn}) - ${this.isAvailable ? "Available": "Borrowed"}`)
    }
}

const book = new Book("The Pragmatic Programmer", "David Thomas", "978-0135957059");
book.borrowBook();
book.returnBook();
book.borrowBook();
book.displayInfo();
