//matrix: keeps track of x's and o's placement
var matrix = new Array(3).fill(new Array(3));


//players
var player1 = "X";
var palyer2 = "O";
var current = "X";

//add event listeners to table cells
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        (function () {
            let id = `${i + 1}${j + 1}`;
            let element = document.getElementById(`${id}`);
            if (element.innerHTML === "") {
                element.addEventListener("click", function(event) {
                    element.innerHTML = current;
                    current = current === "X" ? "O" : "X";
                })
            }
        }())
    }
};



//winner function: determines if there is a winner in the game

// var sound = new Audio()
// sound.play()