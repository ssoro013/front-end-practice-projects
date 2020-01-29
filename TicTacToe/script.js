//matrix: keeps track of x's and o's placement
var matrix = Array(3).fill().map(()=>Array(3).fill());

//players
var player1 = "X";
var palyer2 = "O";
var current = "X";

//scores
var score1 = 0;
var score2 = 0;

//play counts
var count = 0;

//restart game
var restart = function() {
    var table = document.getElementById("table");
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            var element = table.rows[i].cells[j];
            element.innerText = '';
            matrix[i][j] = '';
        }
    }
};

//winner function: determines if there is a winner in the game
var winner = function(matrix, count) {
    var outcomes = [matrix[0], matrix[1], matrix[2], [matrix[0][0], matrix[1][0], matrix[2][0]], [matrix[0][1], matrix[1][1], matrix[2][1]], [matrix[0][2], matrix[1][2], matrix[2][2]], [matrix[0][0], matrix[1][1], matrix[2][2]], [matrix[0][2], matrix[1][1], matrix[2][0]]]
    if(outcomes.some(outcome => outcome.join('') === 'XXX')) {
        return 'X';
    }
    if(outcomes.some(outcome => outcome.join('') === "OOO")) {
        return 'O';
    }
    if(count === 9) {
        return 'Draw';
    }
};


//add event listeners to table cells
$('.cell').on('click', function(event) {
    var row = $(this).closest('tr').index();
    var col = $(this).closest('td').index();
    if(this.innerText === '') {
        this.innerText = current;
        matrix[row][col] = current;
        current = current === "X" ? "O" : "X";
        count ++;
        if(winner(matrix, count)) {
            var outcome = winner(matrix, count);
            if(outcome === 'X') {
                score1 ++; 
            }
            if(outcome === 'O') {
                score2 ++;
            }
            element1.innerHTML = `Player 1: ${score1}`;
            element2.innerHTML = `Player 2: ${score2}`;
            restart();
            count = 0;
        }
    }
});

//score trackers
var element1 = document.getElementById("player1");
element1.innerHTML = `Player 1: ${score1}`;

var element2 = document.getElementById("player2");
element2.innerHTML = `Player 2: ${score2}`;

// var currentWinner = document.getElementById("winner");
// currentWinner.innerHTML = `Current Winner: ${current}`

// var sound = new Audio()
// sound.play()


//$('selector').empty()