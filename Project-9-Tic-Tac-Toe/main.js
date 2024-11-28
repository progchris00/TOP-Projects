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

    const gameAnnouncement = document.querySelector(".game-announcement");
    gameAnnouncement.textContent = "Player one's turn"
    const attachListener = () => {
        const board = document.querySelector(".board");
        board.addEventListener("click", (e) => {
            if (board.contains(e.target)) {
                takeTurns(e.target.id);
            }
        })
    }

    const takeTurns = (move) => {
        if (playerToMove === "Player One") {
            gameAnnouncement.textContent = "Player Two's turn"
            playerOne.setTurns(move);
            document.getElementById(move).textContent = "X";
            checkGameStatus("Player One", playerOne.getTurns());
            playerToMove = "Player Two";
        } else if (playerToMove === "Player Two") {
            gameAnnouncement.textContent = "Player One's turn"
            playerTwo.setTurns(move);
            document.getElementById(move).textContent = "O";
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
                gameAnnouncement.textContent = `${playerName} Won!`;
            }
        })
    }

    const runGame = () => {
        attachListener();
    }

    return {runGame};
})();

gameBoard.runGame();