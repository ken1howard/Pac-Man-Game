import MovingPacman from "./MovingPacman.js";


export default class Pacman {
    constructor(x,y,gameSize, velocity, gameBoard) {
        this.x = x;
        this.y = y;
        this.gameSize = gameSize;
        this.velocity = velocity;
        this.gameBoard = gameBoard;

        this.currentMovingDirection = null;
        this.requestedMovingDirection = null;

        document.addEventListener("keydown", this.#keydown)

        this.#loadPacmanImages();
    }

    draw(ctx){
        this.#move();
        ctx.drawImage(
            this.pacmanImages[this.pacmanImageIndex],
            this.x, 
            this.y, 
            this.gameSize,
            this.gameSize 
            );
    }

    #loadPacmanImages() {
        const pacmanImage1 = new Image();
        pacmanImage1.src = '../images/Closed.png';

        const pacmanImage2 = new Image();
        pacmanImage2.src = '../images/PartialOpen.png';

        const pacmanImage3 = new Image();
        pacmanImage3.src = '../images/OpenWide.png';

        const pacmanImage4 = new Image();
        pacmanImage4.src = '../images/PartialOpen.png';

        this.pacmanImages = [
            pacmanImage1,
            pacmanImage2,
            pacmanImage3,
            pacmanImage4,
        ];

        this.pacmanImageIndex = 0;
    }  

    #keydown =(event) => {
//up
if (event.keyCode == 38){
    if(this.currentMovingDirection == MovingPacman.down)
    this.currentMovingDirection = MovingPacman.up;
    this.requestedMovingDirection = MovingPacman.up;
}
//down
if (event.keyCode == 40){
    if(this.currentMovingDirection == MovingPacman.up)
    this.currentMovingDirection = MovingPacman.down;
    this.requestedMovingDirection = MovingPacman.down;
}
//left
if (event.keyCode == 37){
    if(this.currentMovingDirection == MovingPacman.right)
    this.currentMovingDirection = MovingPacman.left;
    this.requestedMovingDirection = MovingPacman.left;
}
//right
if (event.keyCode == 39){
    if(this.currentMovingDirection == MovingPacman.left)
    this.currentMovingDirection = MovingPacman.right;
    this.requestedMovingDirection = MovingPacman.right;
}
    };
    #move() {
        if(this.currentMovingDirection !== this.requestedMovingDirection) {
        if(Number.isInteger(this.x/this.gameSize) &&
        Number.isInteger(this.y/this.gameSize)
        ){
            this.currentMovingDirection = this.requestedMovingDirection;
        }
    }
        switch (this.currentMovingDirection) {
            case MovingPacman.up:
            this.y -= this.velocity;
            break;
            case MovingPacman.down:
            this.y += this.velocity;
            break;
        }
    }
}

