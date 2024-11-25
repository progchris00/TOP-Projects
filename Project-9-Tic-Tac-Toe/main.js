const playerOneTurns = [0, 1, 2];
const playerTwoTurns = [];

function playerOneMoves(move) {
    playerOneTurns.push(move);
}

function playerTwoMoves(move) {
    playerTwoTurns.push(move);
}

function checkGameStatus() {
    const winningCombination = ["012", "345", "678", "036", "147", "258", "048", "246"];
    winningCombination.forEach((combination) => {
        playerOneTurns.forEach((turn) => {
            if (combination.includes(turn.toString())) {
                console.log(combination, turn);
            }
        })
    })
}

checkGameStatus();