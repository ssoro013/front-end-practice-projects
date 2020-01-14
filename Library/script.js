//library: array of books
var library = [];

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
    var table = document.getElementById("library");
    var children  = table.childNodes;
    var count = children[1].rows.length;
    for (var i = 0; i < books.length; i++) {
        var row = table.insertRow(count);
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = library[i].title;
        cell2.innerHTML = library[i].author;
        cell3.innerHTML = library[i].pages;
        cell4.innerHTML = library[i].read;
    }
};

var hideForm = function() {

};

var showForm = function() {

};

addBook("Being Mortal", "Atul Gawande", 304, "No")
addBook("When Breath Becomes Air", "Paul Kalanithi", 256, "No")
render(library)