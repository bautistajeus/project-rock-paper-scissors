function getComputerChoice() {
    let randomChoice = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random()*3);
    return randomChoice[randomNumber];
}

//Write a function that plays a single round of Rock Paper Scissors.
function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return alert("It's a DRAW!");
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER"){ 
        return alert("You lose! Paper beats Rock!");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        return alert("You win! Rock beats Scissors!");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return alert("You win! Paper beats Rock!");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return alert("You lose! Scissors beat Paper!");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return alert("You win! Scissors beat Paper!");
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return alert("You lose! Rock beats Scissors");
    } else {
        return alert("WRONG INPUT!");
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose from Rock, Paper or Scissors');
        let computerSelection = getComputerChoice();
        console.log(play(playerSelection, computerSelection));
    }
}
game();