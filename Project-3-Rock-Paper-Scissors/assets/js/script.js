let humanScore;
let computerScore;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random() * 3);
    return choices[choice]
}

const getHumanChoice = () => {
    return prompt()
} 

const playRound = (humanChoice, computerChoice) => {
    beatsBy = {
        "scissors":"rock", 
        "rock":"paper",
        "paper":"scissors"
    };

    console.log(computerChoice)

    if (beatsBy[humanChoice] === computerChoice) {
        console.log(`You lose!, ${computerChoice} beats ${humanChoice}`)
    } else if (beatsBy[computerChoice] === humanChoice & humanChoice !== computerChoice){
        console.log("You won!")
    } else {
        console.log("Draw!")
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

