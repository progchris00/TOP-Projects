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

function toggleStatus(bookID) {
    const button = document.getElementById(bookID);
    let bookStatus = button.getAttribute("data-status");
    bookStatus = bookStatus === "true" ? "false" : "true";
    button.setAttribute("data-status", bookStatus);
    button.textContent = bookStatus === "true" ? "Read" : "Not Read";
    myLibrary[bookID].read = bookStatus === "true";
}

function displayBooks() {
    const bookContainer = document.querySelector(".books-container");
    bookContainer.innerHTML = "";
    let bookID = 0;
    myLibrary.forEach((book) => {
        let readStatus = book.read === true ? "Read" : "Not Read";
        bookContainer.innerHTML += `
        <div data-attribute=${bookID}>
            <p>Book Title: ${book.title} </p>
            <p>Author: ${book.author} </p>
            <p>Pages: ${book.pages} </p>
            <button data-status="${book.read}" onclick="toggleStatus(${bookID})" id="${bookID}">${readStatus}</button>
            <button class="delete-button">Remove book</button>
        </div>
  `;
        bookID++;
    });
}

function removeInputValues(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}

openModalButton.addEventListener("click", () => {
    addNewBookModal.showModal();
})
closeModal.addEventListener("click", () => {
    addNewBookModal.close();
})

submitNewBookButton.addEventListener("click", (event) => {
    const bookTitle = document.getElementById("title").value;
    const bookAuthor = document.getElementById("author").value;
    const bookPages = document.getElementById("pages").value;
    const bookRead = document.getElementById("read").checked;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    addNewBookModal.close();
    displayBooks();
    removeInputValues();
})

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        const parentElement = event.target.parentElement;
        const bookIndex = parseInt(parentElement.getAttribute("data-attribute"));
        myLibrary.splice(bookIndex, 1);
        displayBooks();
    }
})