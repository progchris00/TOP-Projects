const buttonSection = document.querySelector(".choices");
const computerScoreContainer = document.querySelector(".computer-score");
const playerScoreContainer = document.querySelector(".player-score");

const rounds = 5;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ["water", "grass", "fire"];
  const choice = Math.floor(Math.random() * 3);
  return choices[choice];
};

const playRound = (humanChoice, computerChoice) => {
  const beatsBy = {
    fire: "water",
    water: "grass",
    grass: "fire",
  };

  if (beatsBy[humanChoice] === computerChoice) {
    console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
    computerScore += 1;
    computerScoreContainer.textContent = `Computer Score: ${computerScore}`;
  } else if (
    beatsBy[computerChoice] === humanChoice &&
    humanChoice !== computerChoice
  ) {
    console.log("You won!");
    humanScore += 1;
    playerScoreContainer.textContent = `Player Score: ${humanScore}`;
  } else {
    console.log("Draw!");
  }
};

const announceWinner = () => {
  if (humanScore > computerScore) {
    console.log("You won!");
  } else if (humanScore < computerScore) {
    console.log(`You lose! ${humanScore}-${computerScore}`);
  } else {
    console.log("Draw!");
  }
};

buttonSection.onclick = (event) => {
  const buttonClicked = event.target.getAttribute("id");
  const humanChoice = buttonClicked;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  // announceWinner();
};
