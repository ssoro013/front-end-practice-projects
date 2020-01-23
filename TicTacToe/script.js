//matrix: keeps track of x's and o's placement
var matrix = Array(3).fill().map(()=>Array(3).fill());


//players
var player1 = "X";
var palyer2 = "O";
var current = "X";

//add event listeners to table cells
$('.cell').on('click', function(e) {
    var row = $(this).closest('tr').index();
    var col = $(this).closest('td').index();
    if (this.innerHTML === '') {
        var element = document.createElement("div");
        element.textContent = current;
        this.appendChild(element)
        matrix[row][col] = current;
        current = current === "X" ? "O" : "X";
    }
});

//winner function: determines if there is a winner in the game

// var sound = new Audio()
// sound.play()