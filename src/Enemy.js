import MovingPacman from "./MovingPacman.js";

export default class Enemy {
constructor (x,y,gameSize, velocity, gameBoard) {
    this.x = x;
    this.y = y;
    this.gameSize = gameSize;
    this.velocity = velocity;
    this.gameBoard = gameBoard;


    this.#loadImages();

    this.movingDirection = Math.floor(
        Math.random() * Object.keys(MovingPacman).length
    );

    this.directionTimerDefault = this.#random(10,50)
    this.directionTimer = this.directionTimerDefault;
}


    draw(ctx) {
        this.#move();
        this.#changeDirection();
        ctx.drawImage(this.image, 
            this.x, 
            this.y, 
            this.gameSize, 
            this.gameSize);
    }

#changeDirection() {
    this.directionTimer --;
    let newMoveDirection = null;
    if(this.directionTimer == 0) {
        this.directionTimer = this.directionTimerDefault;
        newMoveDirection = Math.floor(
            Math.random() * Object.keys(MovingPacman).length
        );
    }
     if(newMoveDirection != null && this.movingDirection != newMoveDirection)  {
        if(
        Number.isInteger(this.x / this.gameSize) &&
        Number.isInteger(this.y / this.gameSize)
        ) {
            if(
                !this.gameBoard.wallCollision(
                this.x, 
                this.y, 
                newMoveDirection
                )
                ) {
                this.movingDirection = newMoveDirection;
            }
        }
     }
}


#move() {
    if(
        !this.gameBoard.wallCollision(
        this.x,
        this.y,
        this.movingDirection
          )
          ) {
            switch(this.movingDirection) {
                case MovingPacman.up:
                this.y -= this.velocity;
                break;
                case MovingPacman.down:
                this.y += this.velocity;
                break;
                case MovingPacman.left:
                this.x -= this.velocity;
                break;
                case MovingPacman.right:
                this.x += this.velocity;
                break;
            }
}
}
    #random (min, max) {
        return Math.floor(Math.random()* (max -min +1 )) + min;
    }

    #loadImages(){
        this.normalMonster = new Image ();
        this.normalMonster.src = '../Images/PacmanMonster.png';
        
        this.scaredMonster = new Image ();
        this.scaredMonster.src = '../Images/ScaredMonster.png';

        this.scaredMonster2 = new Image ();
        this.scaredMonster2.src = '../Images/ScaredMonster2.png';

        this.image = this.normalMonster;
        }
    }
