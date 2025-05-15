//function take arguments, create  new book using book constructor. store book object into array.

const myLibrary = [];

function Book(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
}

function addBookToLibrary(title, author) {
    let randomBookID = crypto.randomUUID();
    let book = new Book(title, author, randomBookID);
    myLibrary.push(book);
}