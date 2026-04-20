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

appendBook("harry potter", "J.K Rowling", 100, false);

console.log(books[0]);
