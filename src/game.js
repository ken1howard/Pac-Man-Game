import GameBoard from "./GameBoard.js";

const gameSize = 62;
const velocity = 1;

const canvas = document.getElementById("PacManBoard");
const ctx = canvas.getContext('2d');
//reference context
const gameBoard = new GameBoard(gameSize);
const pacman = gameBoard.getPacman(velocity);


function gameLoop() {
gameBoard.draw(ctx);
pacman.draw(ctx);

}


gameBoard.setCanvasSize(canvas);
setInterval(gameLoop, 1000/75);
//to refresh the screen