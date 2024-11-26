const playerOneTurns = [];
const playerTwoTurns = [];

function playerOneMoves(move) {
    playerOneTurns.push(move);
    checkGameStatus();
}

function playerTwoMoves(move) {
    playerTwoTurns.push(move);
    checkGameStatus()
}

function checkGameStatus() {
    const winningCombination = ["012", "345", "678", "036", "147", "258", "048", "246"];
    const turns = [];
    winningCombination.forEach((combination) => {
        playerOneTurns.forEach((turn) => {
            if (combination.includes(turn.toString())) {
                turns.push(combination);
            }
        })
        let turnCount = turns.filter(turn => turn === combination).length;
        if (turnCount === 3) {
            console.log("You won!");
        }
    })
}