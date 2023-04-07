import GameBoard from "./GameBoard.js";

const gameSize = 62;
const velocity = 2;

const canvas = document.getElementById("PacManBoard");
const ctx = canvas.getContext('2d');
//reference context
const gameBoard = new GameBoard(gameSize);
const pacman = gameBoard.getPacman(velocity);
const enemies = gameBoard.getEnemies(velocity);


function gameLoop() {
gameBoard.draw(ctx);
pacman.draw(ctx);
enemies.forEach((enemy) => enemy.draw(ctx));

}
//function pause ()

gameBoard.setCanvasSize(canvas);
setInterval(gameLoop, 1000/75);
//to refresh the screen