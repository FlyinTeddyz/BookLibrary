(function() {

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
        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('bookAuthor').value;
        const pages = document.getElementById('bookPages').value;
        const read = document.getElementById('read').value;

        const newBook = new AddedBook(title, author, pages, read);
        myLibrary.push(newBook);
    }
    myFormData();
    console.log(myLibrary);


})()
