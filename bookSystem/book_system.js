let books = [];


function addBook() {
  const title = document.getElementById('bookTitle').value.trim();
  const author = document.getElementById('bookAuthor').value.trim();

  if (title && author) {
    books.push({ title, author });
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    showBooks();
  } else {
    alert("Veuillez remplir tous les champs !");
  }
}

function showBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach((book, index) => {
    const bookItem = document.createElement('p');
    bookItem.innerHTML = `
      <strong>${book.title}</strong> par ${book.author}
      <button onclick="deleteBook(${index})">Supprimer</button>
    `;
    bookList.appendChild(bookItem);
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  showBooks();
}
