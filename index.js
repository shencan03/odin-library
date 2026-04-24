const books = {};
const booksContainer = document.querySelector(".books-container");

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
  books[newBook.id] = newBook;
};

appendBook("Harry Potter", "J.K Rowling", 100, false);
appendBook("The Lord of The Rings", "J.R.R Tolkien", 1012, false);

const appendBookCard = (book) => {
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
  bookAuthor.textContent = book.author;
  bookCard.appendChild(bookAuthor);

  const bookPages = document.createElement("span");
  bookPages.classList.add("book-pages");
  bookPages.textContent = book.pages;
  bookCard.appendChild(bookPages);

  const svgNS = "http://www.w3.org/2000/svg";
  const bookRemoveBtn = document.createElementNS(svgNS, "svg");
  bookRemoveBtn.id = "remove-book-button";
  bookRemoveBtn.addEventListener("click", (e) => {
    const targetCard = e.currentTarget.parentElement;
    delete books[targetCard.id];
    targetCard.remove();
  });
  bookRemoveBtn.setAttribute("viewBox", "0 0 24 24");
  const svgPath = document.createElementNS(svgNS, "path");
  svgPath.setAttribute("fill", "currentColor");
  svgPath.setAttribute(
    "d",
    "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z",
  );
  bookRemoveBtn.appendChild(svgPath);
  bookCard.appendChild(bookRemoveBtn);

  booksContainer.appendChild(bookCard);
};

const fillBtnCard = () => {
  const bookBtnCard = document.getElementById("button-card");
  bookBtnCard.replaceChildren();

  const bookTitle = document.createElement("h3");
  bookTitle.setAttribute("contenteditable", "true");
  bookTitle.classList.add("book-title");
  bookTitle.classList.add("placeholder");
  bookTitle.textContent = "Title..";
  bookTitle.addEventListener(
    "keydown",
    (e) => {
      e.currentTarget.textContent = "";
      e.currentTarget.classList.remove("placeholder");
    },
    { once: true },
  );
  bookBtnCard.appendChild(bookTitle);
  bookTitle.focus();

  const line = document.createElement("hr");
  bookBtnCard.appendChild(line);

  const bookAuthor = document.createElement("p");
  bookAuthor.setAttribute("contenteditable", "true");
  bookAuthor.classList.add("book-author");
  bookAuthor.classList.add("placeholder");
  bookAuthor.textContent = "Author..";
  bookAuthor.addEventListener(
    "keydown",
    (e) => {
      e.currentTarget.textContent = "";
      e.currentTarget.classList.remove("placeholder");
    },
    { once: true },
  );
  bookBtnCard.appendChild(bookAuthor);

  const bookPages = document.createElement("span");
  bookPages.setAttribute("contenteditable", "true");
  bookPages.classList.add("book-pages");
  bookPages.classList.add("placeholder");
  bookPages.textContent = "123..";
  bookPages.addEventListener(
    "keydown",
    (e) => {
      e.currentTarget.textContent = "";
      e.currentTarget.classList.remove("placeholder");
    },
    { once: true },
  );
  bookBtnCard.appendChild(bookPages);
};

const appendBtnCard = () => {
  const bookBtnCard = document.createElement("div");
  bookBtnCard.classList.add("book-card");
  bookBtnCard.id = "button-card";

  const svgNS = "http://www.w3.org/2000/svg";
  const bookBtn = document.createElementNS(svgNS, "svg");
  bookBtn.id = "add-book-button";

  bookBtn.setAttribute("viewBox", "0 0 24 24");

  const svgPath = document.createElementNS(svgNS, "path");
  svgPath.setAttribute(
    "d",
    "M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3",
  );
  svgPath.setAttribute("fill", "currentColor");
  bookBtn.appendChild(svgPath);

  bookBtn.addEventListener("click", fillBtnCard);

  bookBtnCard.appendChild(bookBtn);
  booksContainer.appendChild(bookBtnCard);
};

for (id of Object.keys(books)) {
  appendBookCard(books[id]);
}

appendBtnCard();
