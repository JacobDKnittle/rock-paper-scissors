
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else if (randomNumber === 2) {
        return 'Scissors';
    }
}
let computerChoice = getComputerChoice();

function getHumanChoice() {
    let userChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    return userChoice;
    
}

let humanChoice = getHumanChoice();

// humanScore starting at 0

// computerScore starting at 0

// take human and computers choices into a function
    // play a single round comparing choices and increase the winners score by 1
    // log the winner of the round

// playGame function that calls playRound 5 times
    // move playRound and score Variables inside playGame