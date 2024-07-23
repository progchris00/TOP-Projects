const buttonSection = document.querySelector(".choices");
const computerScoreContainer = document.querySelector(".computer-score");
const playerScoreContainer = document.querySelector(".player-score");
const roundResult = document.querySelector(".round-result");
const roundContainer = document.querySelector(".round-container");
const playerStage = document.querySelector(".player-choice.stage");
const computerStage = document.querySelector(".computer-choice.stage");
const header = document.querySelector(".header");
const choicesContainer = document.querySelector(".choices-container");
const finalResultContainer = document.querySelector(".final-result-container");
const finalResultText = document.querySelector(".final-result-text");
const playerButtons = document.querySelector(".player-buttons");
const playAgain = document.querySelector(".play-again");

let humanScore = 5;
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
    header.style.backgroundColor = "#f47932";
    roundResult.textContent = `You lose!`;
    computerScore += 1;
    computerScoreContainer.textContent = `Computer: ${computerScore}`;
  } else if (
    beatsBy[computerChoice] === humanChoice &&
    humanChoice !== computerChoice
  ) {
    header.style.backgroundColor = "#2e4595";
    roundResult.textContent = "You won!";
    humanScore += 1;
    playerScoreContainer.textContent = `Player: ${humanScore}`;
  } else {
    header.style.backgroundColor = "";
    roundResult.textContent = "Draw!";
  }

  currentRound += 1;
};

const announceWinner = () => {
  header.classList.add("hidden");
  playerButtons.classList.add("hidden");
  roundResult.textContent = "";
  choicesContainer.classList.add("hidden");
  finalResultContainer.classList.remove("hidden");
  playAgain.classList.remove("hidden");

  if (humanScore === 5) {
    finalResultContainer.style.backgroundColor = "#2e4595";
    finalResultText.textContent = `You won! ${humanScore}-${computerScore}`;
  } else if (computerScore === 5) {
    finalResultContainer.style.backgroundColor = "#f47932";
    finalResultText.textContent = `You lose! ${humanScore}-${computerScore}`;
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

  if (playerStage.childElementCount === 1) {
    playerStage.insertBefore(playerImgChoice, playerStage.firstChild);
    computerStage.insertBefore(computerImgChoice, computerStage.firstChild);
  } else {
    playerStage.replaceChild(playerImgChoice, playerStage.firstChild);
    computerStage.replaceChild(computerImgChoice, computerStage.firstChild);
  }

  playRound(humanChoice, computerChoice);

  if (computerScore === 5 || humanScore === 5) {
    announceWinner();
  }
};
