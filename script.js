var userGuesses = [];

function play(userMove) {
    var moves = ["rock", "paper", "scissors"];
    var computerMoveIndex = Math.floor(Math.random() * moves.length);
    var computerMove = moves[computerMoveIndex];

    userGuesses.push(userMove);

    if (userGuesses.length === 5) {
        alert("You guessed " + userGuesses.join(", ") + ".");
        userGuesses = [];
    } else if (userMove === computerMove) {
        document.getElementById("result").innerHTML = "It's a tie!";
    } else if ((userMove === "rock" && computerMove === "scissors") ||
            (userMove === "paper" && computerMove === "rock") ||
            (userMove === "scissors" && computerMove === "paper")) {
        document.getElementById("result").innerHTML = "You win!";
    } else {
        document.getElementById("result").innerHTML = "You lose!";
    }
}