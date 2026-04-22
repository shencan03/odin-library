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

// const iterateBooksArray = () => {
//   for(let i = 0; i < books.length; i++){

//   }
// }

appendBook("Harry Potter", "J.K Rowling", 100, false);
appendBook("The Lord of The Rings", "J.R.R Tolkien", 1012, false);
for (let i = 0; i < 30; i++) {
  appendBook("The Lord of The Rings", "J.R.R Tolkien", 1012, false);
}

const booksContainer = document.querySelector(".books-container");

for (let i = 0; i < books.length; i++) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.id = books[i].id;

  const bookTitle = document.createElement("h3");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = books[i].title;
  bookCard.appendChild(bookTitle);

  const line = document.createElement("hr");
  bookCard.appendChild(line);

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("book-author");
  bookAuthor.textContent = `${books[i].author}`;
  bookCard.appendChild(bookAuthor);

  const bookPages = document.createElement("span");
  bookPages.classList.add("book-pages");
  bookPages.textContent = books[i].pages;
  bookCard.appendChild(bookPages);

  booksContainer.appendChild(bookCard);
}

console.log(books[0]);
