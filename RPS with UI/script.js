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
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
        || (playerSelection === "PAPER" && computerSelection === "ROCK") 
        || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore += 1
        if( playerScore === 5) {
            alert("You win! " + playerSelection + " beats " + computerSelection + "\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
            alert('You WON the game!\nFinal score is:\nYou - ' + playerScore + "   Computer - " + computerScore + '\nPLAY AGAIN!')
            playerScore = 0
            computerScore = 0
            return
        } else{
            return alert("You win! " + playerSelection + " beats " + computerSelection + "\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
        }
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") 
        || (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
        || (playerSelection === "SCISSORS" && computerSelection === "ROCK")){ 
        computerScore += 1
        if( computerScore === 5) {
            alert("You lose! " + computerSelection + " beats " + playerSelection + "\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
            alert('You LOSE the game!\nFinal score is:\nYou - ' + playerScore + "   Computer - " + computerScore + '\nPLAY AGAIN!')
            playerScore = 0
            computerScore = 0
            return
        } else{
            return alert("You lose! " + computerSelection + " beats " + playerSelection + "\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);
        }
        
    } else {
        return alert("It's a DRAW!\nThe score is:   You - " + playerScore + "   Computer - " + computerScore);  
    }
}

const container = document.querySelector('#container')

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id
        let computerSelection = getComputerChoice()
        play(playerSelection, computerSelection)
    })
})





/*var rounds = 5;
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
game() */