const library = () => {
  const displayBook = document.querySelector('.display-Books');
  const form = document.querySelector('form');

  function storedData(book) {
    localStorage.setItem('form', JSON.stringify(book));
  }

  function getData() {
    const receivedData = localStorage.getItem('form');
    if (receivedData) {
      return JSON.parse(receivedData);
    }
    return JSON.parse(receivedData);
  }

  let books = [];

  class Book {
    constructor(title, author, id) {
      this.id = id;
      this.title = title;
      this.author = author;
    }

    addBook() {
      const id = books.length + 1;

      books.push(new Book(this.title, this.author, id));
      return books;
    }

    static removeBook(bookCollection, id) {
      return bookCollection.filter((book) => book.id !== +id);
    }
  }

  function displayBooks() {
    const allBooks = getData();
    if (allBooks) {
      books = allBooks;
    }
    displayBook.innerHTML = '<h1>All Awesome Books</h1>';
    let index = 1;
      console.log(books)
    books?.forEach((book) => {
      displayBook.insertAdjacentHTML(
        'beforeend',
        `<div class='d-flex justify-content-between p-1 ${index % 2 === 0 ? '' : 'bg-secondary text-white'} border border-dark border-2'><div class='d-flex'><h3>${book.title}
      </h3> &nbsp; &nbsp; <h3>by</h3> &nbsp; &nbsp; <h3>${book.author}</h3></div>
      <button type='button' class='removeBtn btn btn-danger' id=${book.id} title= '${book.title}'>Remove</button></div>`,
      );
      index += 1;
    });
  }

  form.addEventListener('submit', (e) => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const newBook = new Book(title, author);
    storedData(newBook.addBook());
    displayBooks();
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    e.preventDefault();
  });

  displayBook.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeBtn')) {
      const allBooks = getData();
      const { id } = e.target;
      const remainingBooks = Book.removeBook(allBooks, id);
      storedData(remainingBooks);
      displayBooks();
    }
  });

  window.onload = () => {
    getData();
    displayBooks();
  };
};

export default library;