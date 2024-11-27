function createPlayer(name) {
    const playerName = name;
    const playerTurns = [];

    const setTurns = (move) => {
        playerTurns.push(move);
    }
    const getTurns = () => playerTurns;

    return {setTurns, getTurns};
}

const gameBoard = (function () {
    const winningCombination = ["012", "345", "678", "036", "147", "258", "048", "246"];
    const isGameOver = false;

    const playerOne = createPlayer("Player One")
    const playerTwo = createPlayer("Player Two")

    const takeTurns = () => {
        playerOne.setTurns();
        checkGameStatus("Player One", playerOne.getTurns());

        playerTwo.setTurns();
        checkGameStatus("Player Two", playerTwo.getTurns());
    }

    const checkGameStatus = (playerName, playerTurns) => {
        const turns = [];

        winningCombination.forEach((combination) => {
            playerTurns.forEach((turn) => {
                if (combination.includes(turn.toString())) {
                    turns.push(combination);
                }
            })

            let turnCount = turns.filter(turn => turn === combination).length;
            if (turnCount === 3) {
                console.log(`${playerName} Won!`);
            }
        })
    }

    const runGame = () => {
        if (!isGameOver) {
            takeTurns();
        }
    }

    return {runGame};
})();

gameBoard.runGame();