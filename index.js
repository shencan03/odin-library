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

  return newBook.id;
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

  const removePlaceHolder = (e) => {
    e.currentTarget.textContent = "";
    e.currentTarget.classList.remove("placeholder");
  };

  bookTitle.addEventListener("keydown", removePlaceHolder, { once: true });
  bookBtnCard.appendChild(bookTitle);
  bookTitle.focus();

  const line = document.createElement("hr");
  bookBtnCard.appendChild(line);

  const bookAuthor = document.createElement("p");
  bookAuthor.setAttribute("contenteditable", "true");
  bookAuthor.classList.add("book-author");
  bookAuthor.classList.add("placeholder");
  bookAuthor.textContent = "Author..";
  bookAuthor.addEventListener("keydown", removePlaceHolder, { once: true });
  bookBtnCard.appendChild(bookAuthor);

  const bookPages = document.createElement("span");
  bookPages.setAttribute("contenteditable", "true");
  bookPages.classList.add("book-pages");
  bookPages.classList.add("placeholder");
  bookPages.textContent = "123..";
  bookPages.addEventListener("keydown", removePlaceHolder, { once: true });
  bookBtnCard.appendChild(bookPages);

  const svgNS = "http://www.w3.org/2000/svg";

  const bookEdit = document.createElement("div");
  bookEdit.classList.add("book-edit");

  const bookConfirmBtn = document.createElementNS(svgNS, "svg");
  bookConfirmBtn.id = "book-confirm";
  bookConfirmBtn.setAttribute("viewBox", "0 0 24 24");
  const confirmPath = document.createElementNS(svgNS, "path");
  confirmPath.setAttribute(
    "d",
    "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z",
  );
  confirmPath.setAttribute("fill", "currentColor");
  bookConfirmBtn.appendChild(confirmPath);
  bookConfirmBtn.addEventListener("click", () => {
    const bookId = appendBook(
      bookTitle.textContent,
      bookAuthor.textContent,
      bookPages.textContent,
      false,
    );
    document.getElementById("button-card").remove();
    appendBookCard(books[bookId]);
    appendBtnCard();
  });
  bookEdit.appendChild(bookConfirmBtn);

  const bookCancelBtn = document.createElementNS(svgNS, "svg");
  bookCancelBtn.id = "book-cancel";
  bookCancelBtn.setAttribute("viewBox", "0 0 24 24");
  const cancelPath = document.createElementNS(svgNS, "path");
  cancelPath.setAttribute(
    "d",
    "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z",
  );
  cancelPath.setAttribute("fill", "currentColor");
  bookCancelBtn.addEventListener("click", () => {
    document.getElementById("button-card").remove();
    appendBtnCard();
  });
  bookCancelBtn.appendChild(cancelPath);
  bookEdit.appendChild(bookCancelBtn);

  bookBtnCard.appendChild(bookEdit);
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
