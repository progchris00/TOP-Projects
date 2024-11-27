function createPlayer(name) {
    const playerName = name;
    const playerTurns = [];

    const setTurns = (move) => {
        playerTurns.push(move);
    }
    const getTurns = () => playerTurns;

    return {setTurns, getTurns};
}

(function () {
    const winningCombination = ["012", "345", "678", "036", "147", "258", "048", "246"];
    const isGameOver = false;

    const playerOne = createPlayer("Player One")
    const playerTwo = createPlayer("Player Two")

    const takeTurns = () => {
        while (isGameOver === false) {
            playerOne.setTurns();
            checkGameStatus(playerOne.getTurns());

            playerTwo.setTurns();
            checkGameStatus(playerTwo.getTurns());
        }
    }

    const checkGameStatus = (playerTurns) => {
        const turns = [];

        winningCombination.forEach((combination) => {
            playerTurns.forEach((turn) => {
                if (combination.includes(turn.toString())) {
                    turns.push(combination);
                }
            })

            let turnCount = turns.filter(turn => turn === combination).length;
            if (turnCount === 3) {
                console.log("Game Over!");
            }
        })
    }
})();