
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}
let computerChoice = getComputerChoice();

function getHumanChoice() {
  let userChoice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
  return userChoice;
}

let humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {
  // play a single round comparing choices and increase the winners score by 1
  // scenarios human wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === 'paper')
  ) {
    humanScore++;
    console.log("Player wins round.");
  }
  // scenarios computer wins
  else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === 'paper')
  ) {
    computerScore++;
    console.log("Computer wins round.");
  } else {
    console.log("Tie!");
  }
  
}


// playGame function that calls playRound 5 times
function playGame(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound(humanChoice, computerChoice)
  }
}
// move playRound and score Variables inside playGame
playGame(humanChoice, computerChoice)