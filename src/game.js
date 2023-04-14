import GameBoard from "./GameBoard.js";

const gameSize = 62;
const velocity = 2;

const canvas = document.getElementById("PacManBoard");
const ctx = canvas.getContext('2d');
//reference context
const gameBoard = new GameBoard(gameSize);
const pacman = gameBoard.getPacman(velocity);
const enemies = gameBoard.getEnemies(velocity);

let gameOver = false;
let gameWin = false;
const gameOverSound = new Audio ('..sounds/GameOver.wav');
const gameWinSound = new Audio ('..sounds/GameWin.wav');



function gameLoop() {
gameBoard.draw(ctx);
pacman.draw(ctx);
enemies.forEach((enemy) => enemy.draw(ctx, pause(), pacman));
checkGameOver();

}

function checkGameOver() {
    if(!gameOver) {
        gameOver = isGameOver();
        if(gameOver) {
            gameOverSound.play();
        }
    }
}

function isGameOver() {
    return enemies.some(
        enemy => !pacman.cakeSoundActive && enemy.collideWith(pacman)
        );
}
function pause () {
    return !pacman.madeFirstMove;
}

gameBoard.setCanvasSize(canvas);
setInterval(gameLoop, 1000/75);
//to refresh the screen