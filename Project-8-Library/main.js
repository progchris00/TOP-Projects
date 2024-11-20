const myLibrary = [];
const openModalButton = document.getElementById("open-modal-button");
const closeModal = document.getElementById("close-modal-button");
const addNewBookModal = document.getElementById("add-new-book-modal");

const submitNewBookButton = document.getElementById("submit-new-book-button");

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
        const bookContainer = document.querySelector(".books-container");
        bookContainer.innerHTML += `
        <li>Book Title: ${book.title} </li>
        <li>Author: ${book.author} </li>
        <li>Pages: ${book.pages} </li>
        <li> ${book.read} </li
  `;
    });
}

openModalButton.addEventListener("click", () => {
    addNewBookModal.showModal();
})
closeModal.addEventListener("click", () => {
    addNewBookModal.close();
})

submitNewBookButton.addEventListener("click", (event) => {
    event.preventDefault();
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("read").value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    addNewBookModal.close();
    displayBooks();
})

