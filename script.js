let myLibrary = [];

// Constructor Example
class AddedBook {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// ----Factory Function example----
// const AddedBook = (title, author, pages, read) => {
//   return {title, author, pages, read};
// }

function myFormData() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;
  const read = document.querySelector('[name="ifRead"]').value;
  
  const newBook = new AddedBook(title, author, pages, read);
  
  // ----Factory Function example calling function----
  // const newBook = AddedBook(title, author, pages, read)

  myLibrary.push(newBook);
  console.log(myLibrary);
}

function clearInput() {
  document.getElementById('dataForm').reset();
}