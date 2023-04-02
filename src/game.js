import GameBoard from "./GameBoard.js";

const gameSize = 32;
const canvas = document.getElementById("PacManBoard");
const ctx = canvas.getContext('2d');
//reference context
const gameBoard = new GameBoard(gameSize);


function gameLoop() {
console.log ("game loop");

}

setInterval(gameLoop, 1000/75);
//to refresh the screen