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
    let playerToMove = "Player One";

    const playerOne = createPlayer("Player One")
    const playerTwo = createPlayer("Player Two")

    const attachListener = () => {
        const board = document.querySelector(".board");
        board.addEventListener("click", (e) => {
            if (board.contains(e.target)) {
                takeTurns(e.target.value);
            }
        })
    }

    const takeTurns = (move) => {
        if (playerToMove === "Player One") {
            playerOne.setTurns(move);
            checkGameStatus("Player One", playerOne.getTurns());
            console.log(`Player One turns: ${playerOne.getTurns()}`);
            playerToMove = "Player Two";
        } else if (playerToMove === "Player Two") {
            playerTwo.setTurns(move);
            checkGameStatus("Player Two", playerTwo.getTurns());
            console.log(`Player Two turns: ${playerTwo.getTurns()}`);
            playerToMove = "Player One";
        }
    }

    const checkGameStatus = (playerName, playerTurns) => {
        const turns = [];

        winningCombination.forEach((combination) => {
            playerTurns.forEach((turn) => {
                if (combination.includes(turn?.toString())) {
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
        attachListener();
    }

    return {runGame};
})();

gameBoard.runGame();