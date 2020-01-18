//matrix: keeps track of x's and o's placement
var matrix = new Array(3).fill(new Array(3).fill(""));

//players
var player1 = "X";
var palyer2 = "O";
var current = "X";

//add event listeners to table cells
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        (function () {
            var id = `${i}${j}`;
            var element = document.getElementById(`${id}`);
            element.addEventListener("click", function() {
                if (element.innerHTML === "") {
                    element.innerHTML = current;
                    current = current === "X" ? "O" : "X";
                }
            })
        }())
    }
};

//winner function: determines if there is a winner in the game
var winner = function(matrix) {
    
};

// var sound = new Audio()
// sound.play()