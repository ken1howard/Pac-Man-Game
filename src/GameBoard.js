import Pacman from './Pacman.js';
import Enemy from './Enemy.js';
import MovingPacman from './MovingPacman.js';

export default class GameBoard {
    constructor (gameSize){
        this.gameSize = gameSize;

        this.cupCake = new Image()
        this.cupCake.src = '../Images/Cupcake.png';

        this.cake = new Image ();
        this.cake.src = ' ../Images/Cake.png';

        this.wall =new Image ()
        this.wall.src = '../Images/GameboardWall.png';

        this.bigCake = this.cake;
        this.cakeAnimationTimerDefault = 60;
        this.cakeAnimationTimer = this.cakeAnimationTimerDefault;
        

    }
// Use Array to Display the Gameboard
// Link the numbers to the images 
    board = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,4,0,0,0,0,0,0,0,0,0,0,0,4,1],
        [1,0,1,0,1,1,1,0,1,1,1,0,1,0,1],
        [1,0,1,5,0,0,0,0,0,0,0,5,1,0,1],
        [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,2,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,5,0,0,0,0,0,0,0,5,1,0,1],
        [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1],
        [1,4,0,0,0,0,0,0,0,0,0,0,0,4,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]

// Draw method links the images to the values in the array through conditional statements
    draw(ctx) {
        for (let row = 0; row < this.board.length; row++){
            for(let column = 0; column < this.board[row].length; column++){
                let tile = this.board[row][column];
                if(tile ===1) {
                    this.#drawWall(ctx, column,row, this.gameSize);
                }
                else if (tile === 0) {
                this.#drawCupcake(ctx, column,row, this.gameSize);
                } else if (tile == 5) {
                   this.#drawCake(ctx, column,row, this.gameSize);
                } else {
                    this.#drawBlank (ctx, column,row, this.gameSize);
                }
            }
        }
        // 0 = Dots / 1 = Walls / 2 = Pac-man / 3 = Empty Space / 4 = Enemies / 5 = Power 
    //console.log('draw')
   }
// Display the acutal images on the canvas with the proper sizing with these functions
   #drawCupcake(ctx, column,row, size){
    ctx.drawImage(
      this.cupCake,
        column * this.gameSize,
        row * this.gameSize,
        size,
        size)
    }

    #drawCake (ctx, column, row, size) {
        this.cakeAnimationTimer --;
        if(this.cakeAnimationTimer ===0) {
            this.cakeAnimationTimer = this.cakeAnimationTimerDefault;
            if(this.bigCake == this.cake) {
                this.bigCake = this.cupCake;
            } else {
                this.bigCake = this.cake;
            }
        }
        ctx.drawImage(this.bigCake, column * size, row * size, size, size);
    }

#drawWall(ctx, column,row, size){
ctx.drawImage(
    this.wall,
    column * this.gameSize,
    row * this.gameSize,
    size,
    size)
}

#drawBlank(ctx, column, row, size) {
     ctx.fillStyle = "black";
     ctx.fillRect( column * this.gameSize, row * this.gameSize, size, size);
}
getPacman(velocity) {
    for(let row=0; row < this.board.length; row++){
        for(let column =0; column < this.board[row].length; column++){
            let tile = this.board[row][column];
            if (tile === 2) {
                this.board[row][column] = 0;
                return new Pacman(column * this.gameSize,
                     row * this.gameSize,
                     this.gameSize,
                      velocity,
                      this);
            }
        }
    }
}

getEnemies(velocity) {
const enemies = [];

for(let row = 0; row < this.board.length; row++) {
    for(let column = 0; column < this.board[row].length; column++){
        const tile = this.board[row][column];
        if (tile == 4) {
            this.board[row][column] = 0;
            enemies.push(
                new Enemy (column * this.gameSize,
                 row * this.gameSize, 
                 this.gameSize, 
                 velocity, 
                 this
                 )
                 );
        }
    }
}
return enemies;
}

   setCanvasSize(canvas){
    canvas.width = this.board[0].length * this.gameSize;
    canvas.height = this.board.length * this.gameSize;
   }

   wallCollision(x,y,direction) {

    if(direction == null) {
        return;
    }


    if(
    Number.isInteger(x/this.gameSize) &&
    Number.isInteger(y/ this.gameSize)
    ) {
        let column = 0;
        let row = 0;
        let nextColumn = 0;
        let nextRow = 0;

        switch(direction) {
            case MovingPacman.right:
                nextColumn = x + this.gameSize;
                column = nextColumn / this.gameSize;
                row = y / this.gameSize
                break;
                case MovingPacman.left:
                nextColumn = x - this.gameSize;
                column = nextColumn / this.gameSize;
                row = y / this.gameSize
                break;
                case MovingPacman.down:
                nextRow = y + this.gameSize;
                row = nextRow / this.gameSize;
                column = x / this.gameSize
                break;
                case MovingPacman.up:
                nextRow = y - this.gameSize;
                row = nextRow / this.gameSize;
                column = x / this.gameSize
                break;
        }
   const tile = this.board[row][column];
   if( tile === 1) {
    return true;
   }
}
return false
   }

   eatFood(x, y){
    const row = y / this.gameSize;
    const column = x / this.gameSize;
    if(Number.isInteger(row) && Number.isInteger(column)) {
        if(this.board[row][column] === 0) {
            this.board[row][column] = 3;
            return true;
        }
    }
    return false;
   }
}