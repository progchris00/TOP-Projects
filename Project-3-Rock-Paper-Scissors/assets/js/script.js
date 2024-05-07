const rounds = 5;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

const getHumanChoice = () => {
    return prompt();
} 

const playRound = (humanChoice, computerChoice) => {
    const beatsBy = {
        "scissors":"rock", 
        "rock":"paper",
        "paper":"scissors"
    };

    if (beatsBy[humanChoice] === computerChoice) {
        console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else if (beatsBy[computerChoice] === humanChoice && humanChoice !== computerChoice){
        console.log("You won!");
        humanScore += 1;
    } else {
        console.log("Draw!");
    }
};

for (let index = 0; index < rounds; index++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
};

if (humanScore > computerScore) {
    console.log("You won!");
} else if (humanScore < computerScore) {
    console.log(`You lose! ${humanScore}-${computerScore}`);
} else {
    console.log("Draw!");
};

