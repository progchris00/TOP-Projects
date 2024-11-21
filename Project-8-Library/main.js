let myLibrary = [];
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
    const bookContainer = document.querySelector(".books-container");
    bookContainer.innerHTML = "";
    let bookID = 0;
    myLibrary.forEach((book) => {
        bookContainer.innerHTML += `
        <div data-attribute="${bookID}">
            <p>Book Title: ${book.title} </p>
            <p>Author: ${book.author} </p>
            <p>Pages: ${book.pages} </p>
            <p> ${book.read} </p>
            <button onclick="deleteBook(${bookID})">Remove book</button>
        </div>
  `;
    bookID++;
    });
}

function deleteBook(bookID) {
    myLibrary.splice(bookID, 1);
    displayBooks();

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
    const bookRead = document.getElementById("read").checked;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    addNewBookModal.close();
    displayBooks();
})

