let humanScore = 0;
let computerScore = 0;

const result = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.computerScore');

playerScoreDisplay.textContent = `Player Score: ${humanScore}`;
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

const choiceButtons = document.querySelectorAll('button');
choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    result.textContent = 'Result: ';
    playRound(button.textContent.toLowerCase());
    checkForWinner(humanScore, computerScore);
  })
})

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


// play a single round comparing choices and increase the winners score by 1
function playRound(humanSelection) {
  let humanChoice = humanSelection;
  let computerChoice = getComputerChoice();
  // scenarios human wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === 'paper')
  ) {
    humanScore++;
    playerScoreDisplay.textContent = `Player Score: ${humanScore}`;
    result.textContent += 'Player wins round!';
  }
  // scenarios computer wins
  else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === 'paper')
  ) {
    
    computerScore++;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    result.textContent += 'Computer wins round!';
  } else {
    result.textContent += 'Tie!';
  }
  
}

function checkForWinner(humanScore, computerScore){
    if (humanScore === 5) {
      result.textContent = 'Result: Player Wins!'
    }
    else if (computerScore === 5) {
      result.textContent = 'Result: Computer Wins!'
    }  
  }

