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
const gameOverSound = new Audio ('../sounds/GameOver.wav');
const gameWinSound = new Audio ('../sounds/GameWin.wav');



function gameLoop() {
gameBoard.draw(ctx);
drawGameEnd();
pacman.draw(ctx, pause(), enemies);
enemies.forEach((enemy) => enemy.draw(ctx, pause(), pacman));
checkGameOver();
checkGameWin();

}

function checkGameWin() {
    if(!gameWin) {
        gameWin = gameBoard.didWin();
        if (gameWin) {
            gameWinSound.play();
        }
    }
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
        (enemy) => !pacman.cakeSoundActive && enemy.collideWith(pacman)
        );
}
function pause () {
    return !pacman.madeFirstMove || gameOver || gameWin;
}

function drawGameEnd() {
    if(gameOver || gameWin) {
        let text = "You Win";
        if(gameOver) {
            text = "Game Over"
        }
        ctx.fillSyle = "white";
       // ctx.fillRect(0, canvas.height/ 3.2, canvas.width, 80);

        ctx.font = "80px comic sans";
        const gradient = ctx.createLinearGradient (0, 0, canvas.width, 0);
        gradient.addColorStop("0", "white");
        gradient.addColorStop("0.5", "white");
        gradient.addColorStop("1.0", "white");
        
        ctx.fillSyle = "white";
        ctx.fillText(text,10, canvas.height/2);
        
        
    }
}

gameBoard.setCanvasSize(canvas);
setInterval(gameLoop, 1000/75);
//to refresh the screen