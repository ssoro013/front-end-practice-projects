//library: array of books
var library = [];

//table containing books
var table = document.getElementById("library");

//book class
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.remove = "Remove"
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
        var cell5 = row.insertCell(4);

        //read(yes/no) dropdown list
        var read = document.createElement("select");
        var option1 = new Option('Yes');
        var option2 = new Option('No');
        read.appendChild(option1);
        read.appendChild(option2);

        cell1.innerHTML = books[i].title;
        cell2.innerHTML = books[i].author;
        cell3.innerHTML = books[i].pages;
        cell4.appendChild(read);
        var remove = document.createElement("button");

        //remove event listener
        remove.addEventListener("click", function() {
            books.splice(i + 1, 1);
            table.deleteRow(row.rowIndex);
        })
        remove.innerHTML = "Remove";
        cell5.appendChild(remove);
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

//add new book using form inputs on second button click
var button2 = document.getElementById("add2");
button2.addEventListener("click", function(event) {
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var pages = document.getElementById("pages");
    var read = document.getElementById("read");
    if (validation(title, author, pages, read)) {
        addBook(title.value, author.value, pages.value, read);
        var book = library.slice(library.length - 1);
        render(book);
        event.preventDefault();
        clearForm();
        hideForm();
    } else {
        showForm();
        event.preventDefault();
    }
});

//clear form inputs
var clearForm = function() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
}

//validation of form inputs
var validation = function(title, author, pages, read) {
    var validation = true;
    if (title.value === "" || title.value === null) {
        title.style.border = "solid 1px red";
        validation = false;
    }
    if (author.value === "" || author.value === null || typeof author.value !== "string") {
        author.style.border = "solid 1px red";
        validation = false;
    }
    if (pages.value === "" || pages.value === null || Number(pages.value) <= 0 || isNaN(pages.value)) {
        pages.style.border = "solid 1px red";
        validation = false;
    }
    if (read.value === "" || read.value === null & (read.value !== "Yes" || read.value !== "No")) {
        read.style.border = "solid 1px red";
        validation = false;
    }

    return validation;
}

addBook("Being Mortal", "Atul Gawande", 304, "No");
addBook("When Breath Becomes Air", "Paul Kalanithi", 256, "No");
render(library);