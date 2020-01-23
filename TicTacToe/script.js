//matrix: keeps track of x's and o's placement
var matrix = Array(3).fill().map(()=>Array(3).fill());

//players
var player1 = "X";
var palyer2 = "O";
var score1 = 0;
var score2 = 0;
var current = "X";

//winner function: determines if there is a winner in the game
var winner = function(matrix) {
    var outcome1 = matrix[0].join("");
    var outcome2 = matrix[1].join("");
    var outcome3 = matrix[2].join("");
    var outcome4 = [matrix[0][0], matrix[1][0], matrix[2][0]].join("");
    var outcome5 = [matrix[0][1], matrix[1][1], matrix[2][1]].join("");
    var outcome6 = [matrix[0][2], matrix[1][2], matrix[2][2]].join("");
    var outcome7 = [matrix[0][0], matrix[1][1], matrix[2][2]].join("");
    var outcome8 = [matrix[0][2], matrix[1][1], matrix[2][0]].join("");
    if (outcome1 === "XXX" || outcome2 === "XXX" ||outcome3 === "XXX" || outcome4 === "XXX" || outcome5 === "XXX" || outcome6 === "XXX" || outcome7 === "XXX" || outcome8 === "XXX") {
        return "X";
    }
    if (outcome1 === "OOO" || outcome2 === "OOO" ||outcome3 === "OOO" || outcome4 === "OOO" || outcome5 === "OOO" || outcome6 === "OOO" || outcome7 === "OOO" || outcome8 === "OOO") {
        return "O";
    }
};

//add event listeners to table cells
$('.cell').on('click', function(e) {
    var row = $(this).closest('tr').index();
    var col = $(this).closest('td').index();
    if (this.innerText === '') {
        this.innerText = current;
        matrix[row][col] = current;
        current = current === "X" ? "O" : "X";
        var outcome = winner(matrix);
        if (outcome) {
            outcome === "X" ? score1 ++ : score2 ++;
            element1.innerHTML = `Player 1: ${score1}`;
            element2.innerHTML = `Player 2: ${score2}`;
        }
    }
});

//score tracker
var element1 = document.getElementById("player1");
element1.textContent = `Player 1: ${score1}`;

var element2 = document.getElementById("player2");
element2.textContent = `Player 2: ${score2}`;

//restart game

// var sound = new Audio()
// sound.play()