function getComputerChoice() {
    let randomChoice = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random()*3);
    return randomChoice[randomNumber];
}

//Write a function that plays a single round of Rock Paper Scissors.
let playerScore = 0
let computerScore = 0

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return alert("It's a DRAW!\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER"){ 
        computerScore += 1
        return alert("You lose! Paper beats Rock!\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerScore += 1
        return alert("You win! Rock beats Scissors!\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore += 1
        return alert("You win! Paper beats Rock!\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore += 1
        return alert("You lose! Scissors beat Paper!\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore += 1
        return alert("You win! Scissors beat Paper!\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore += 1
        return alert("You lose! Rock beats Scissors!\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else {
        return alert("WRONG INPUT!\n\"" + playerSelection.toLowerCase() + '" is not accepted!');
    }
}
var rounds = 5;
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('LET\'S PLAY "Rock", "Paper" or "Scissors"\n' + rounds + ' rounds left!' );
        let computerSelection = getComputerChoice();
        play(playerSelection, computerSelection);
        rounds -= 1
    }
    if (playerScore > computerScore) {
        alert("You WIN the game!\nFinal score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else if (playerScore < computerScore) {
        alert("You LOSE the game!\nFinal score is:   You - " + playerScore + "   Computer - " + computerScore);
    } else {
        alert("It's a TIE!\nFinal score is:   You - " + playerScore + "   Computer - " + computerScore);
    }
}
game()

