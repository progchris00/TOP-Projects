const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML += `
        <li>Book Title: ${book.title} </li>
        <li>Author: ${book.author} </li>
        <li>Pages: ${book.pages} </li>
        <li> ${book.read} </li
  `;
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
