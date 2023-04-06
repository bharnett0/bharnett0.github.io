var userChoice = [];

function play(choose) {
    var choose = ["rock", "paper", "scissors"];
    var computerChoiceIndex = Math.floor(Math.random() * choose.length);
    var computerChoice = choose[computerChoiceIndex];

    userChoice.push(choose);

    if (userChoice.length === 5) {
        alert("You guessed " + userChoice.join(", ") + ".");
        userChoice = [];
    } else if (choose === computerChoice) {
        document.getElementById("result").innerHTML = "It's a tie!";
    } else if ((choose === "rock" && computerChoice === "scissors") ||
            (choose === "paper" && computerChoice === "rock") ||
            (choose === "scissors" && computerChoice === "paper")) {
        document.getElementById("result").innerHTML = "You win!";
    } else {
        document.getElementById("result").innerHTML = "You lose!";
    }
}