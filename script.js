let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissors").addEventListener("click", playRound);

function playRound(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);

  document.getElementById(
    "choices"
  ).textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}`;

  if (winner === "player") {
    playerScore++;
    document.getElementById("result").textContent = `Player wins this round!`;
  } else if (winner === "computer") {
    computerScore++;
    document.getElementById("result").textContent = `Computer wins this round!`;
  } else {
    document.getElementById("result").textContent = `It's a tie!`;
  }

  updateScore();
  checkForWinner();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "tie";
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  )
    return "player";
  return "computer";
}

function updateScore() {
  document.getElementById(
    "score"
  ).textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function checkForWinner() {
  if (playerScore === 10) {
    announceWinner("Player");
  } else if (computerScore === 10) {
    announceWinner("Computer");
  }
}

function announceWinner(winner) {
  if (winner === "Player") {
    document.getElementById("announcement").textContent =
      "Player won the game!";
  } else {
    document.getElementById("announcement").textContent =
      "Computer won the game!";
  }
  document.getElementById("announcement").style.display = "block";
  playerScore = 0;
  computerScore = 0;
  updateScore();
}
