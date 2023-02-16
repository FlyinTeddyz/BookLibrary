// ----Constructor Example----

let myLibrary = [];

class AddedBook {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function myFormData() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;
  const read = document.querySelector('[name="ifRead"]').value;
 
  const newBook = new AddedBook(title, author, pages, read)

  myLibrary.push(newBook);
  console.log(myLibrary);
}

function clearInput() {
  document.getElementById('myForm').reset();
}

/*----Factory Function example----
const AddedBook = (title, author, pages, read) => {
  return {title, author, pages, read};
}

function myFormData() {
const newBook = AddedBook(title, author, pages, read)
myLibrary.push(newBook)
}
*/

/*----Collecting From data refactored----
function myFormData() {
  var formElements = document.getElementById("myForm").elements;
  var postData = {};
  for (var i = 0; i < formElements.length; i++)
    if (formElements[i].type != "submit")
      postData[formElements[i].name] = formElements[i].value;
  
  myLibrary.push(postData)
}*/