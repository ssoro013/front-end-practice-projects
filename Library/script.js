//library: array of books
var library = [];

//table containing books
var table = document.getElementById("library");

//create book class
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//addBook: function to add new book to the library
var addBook = function(title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
}

//render: function to add books to the table that gets rendered
var render = function(books) {
    hideForm();
    var children  = table.childNodes;
    var count = children[1].rows.length;
    for (var i = books.length - 1; i >= 0; i--) {
        var row = table.insertRow(count);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = books[i].title;
        cell2.innerHTML = books[i].author;
        cell3.innerHTML = books[i].pages;
        cell4.innerHTML = books[i].read;
    }
};


//hideForm: function to hide the add form
var hideForm = function() {
    var element = document.getElementById("form");
    element.style.display = "none";
};

//showForm: function to show the add form when "add" button is cliked
var showForm = function() {
    var element = document.getElementById("form");
    element.style.display = "block";
};

//show form on click
var button1 = document.getElementById("add1");
button1.addEventListener("click", function() {
    showForm();
});

//add new book using form inputs
var button2 = document.getElementById("add2");
button2.addEventListener("click", function(event) {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").value;
    addBook(title, author, pages, read);
    var book = library.slice(library.length - 1);
    render(book);
    event.preventDefault();
    hideForm();
})

addBook("Being Mortal", "Atul Gawande", 304, "No");
addBook("When Breath Becomes Air", "Paul Kalanithi", 256, "No");
render(library);