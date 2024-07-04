const buttonSection = document.querySelector(".choices");
const computerScoreContainer = document.querySelector(".computer-score");
const playerScoreContainer = document.querySelector(".player-score");
const roundResult = document.querySelector(".round-result");
const roundContainer = document.querySelector(".round-container");
const playerStage = document.querySelector(".player-choice.stage");
const computerStage = document.querySelector(".computer-choice.stage");

const rounds = 5;
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

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
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore += 1;
    computerScoreContainer.textContent = `Computer: ${computerScore}`;
  } else if (
    beatsBy[computerChoice] === humanChoice &&
    humanChoice !== computerChoice
  ) {
    roundResult.textContent = "You won!";
    humanScore += 1;
    playerScoreContainer.textContent = `Player: ${humanScore}`;
  } else {
    roundResult.textContent = "Draw!";
  }

  currentRound += 1;
  roundContainer.textContent = `Round ${currentRound}`;
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

  const playerImgChoice = document.createElement("img");
  playerImgChoice.src = `./assets/images/${buttonClicked}.png`;
  playerImgChoice.setAttribute("class", "pokemon-choice");

  const computerImgChoice = document.createElement("img");
  computerImgChoice.src = `./assets/images/${computerChoice}.png`;
  computerImgChoice.setAttribute("class", "pokemon-choice");

  playerStage.insertBefore(playerImgChoice, playerStage.firstChild);
  computerStage.insertBefore(computerImgChoice, computerStage.firstChild);

  playRound(humanChoice, computerChoice);

  // announceWinner();
};
