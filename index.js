const books = [];

function Book(title, author, pages, read) {
  if (!new.target)
    throw Error("'new' operator not used while instantiating object");

  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const appendBook = (title, author, pages, read) => {
  const newBook = new Book(title, author, pages, read);
  books.push(newBook);
};

appendBook("Harry Potter", "J.K Rowling", 100, false);
appendBook("The Lord of The Rings", "J.R.R Tolkien", 1012, false);

for (let i = 0; i < 10; i++) {
  appendBook("The Lord of The Rings", "J.R.R Tolkien", 1012, false);
}

const appendBookCard = (booksContainer, book) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.id = book.id;

  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = book.title;
  bookCard.appendChild(bookTitle);

  const line = document.createElement("hr");
  bookCard.appendChild(line);

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = `${book.author}`;
  bookCard.appendChild(bookAuthor);

  const bookPages = document.createElement("span");
  bookPages.classList.add("book-pages");
  bookPages.textContent = book.pages;
  bookCard.appendChild(bookPages);

  booksContainer.appendChild(bookCard);
};

const appendBtnCard = (booksContainer) => {
  const bookBtnCard = document.createElement("div");
  bookBtnCard.classList.add("book-card");
  bookBtnCard.id = "button-card";

  const svgNS = "http://www.w3.org/2000/svg";
  const bookBtn = document.createElementNS(svgNS, "svg");
  bookBtn.classList.add("book-button");
  bookBtn.id = "add-book";

  bookBtn.setAttribute("viewBox", "0 0 24 24");

  const svgPath = document.createElementNS(svgNS, "path");
  svgPath.setAttribute(
    "d",
    "M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3",
  );
  svgPath.setAttribute("fill", "currentColor");
  bookBtn.appendChild(svgPath);

  bookBtnCard.appendChild(bookBtn);
  booksContainer.appendChild(bookBtnCard);
};

const booksContainer = document.querySelector(".books-container");

for (let i = 0; i < books.length; i++) {
  appendBookCard(booksContainer, books[i]);
  if (i == books.length - 1) {
    appendBtnCard(booksContainer);
  }
}
