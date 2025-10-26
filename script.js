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
    playRound(button.textContent.toLowerCase())
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
  // console.log(humanChoice)
  let computerChoice = getComputerChoice();
  // scenarios human wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === 'paper')
  ) {
    // console.log("Player wins round.");
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
    // console.log("Computer wins round.");
    computerScore++;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    result.textContent += 'Computer wins round!';
  } else {
    result.textContent += 'Tie!';
  }
  
}

// function determineWinner(humanScore, computerScore){
//   if (humanScore > computerScore){
//     console.log('Player Wins Game!')
//   }
//   else if (computerScore > humanScore){
//     console.log('Computer Wins Game!');
//   }
//   else {
//     console.log('Game is a Tie!');
//   }
// }



 
  // let roundWinner;
  
  //   roundWinner = playRound();
  //   if (roundWinner === 'player wins round') {
  //     humanScore++;
  //   }
  //   else if (roundWinner === 'computer wins round') {
  //     computerScore++;
  //   }
  
  // determineWinner(humanScore, computerScore);
