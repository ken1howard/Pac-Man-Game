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

        this.pacmanAnimationDefault = 10;
        this.pacmanAnimationTimer = null;

        document.addEventListener("keydown", this.#keydown)

        this.#loadPacmanImages();
    }

    draw(ctx){
        this.#move();
        this.#animate();
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
            if(
                !this.gameBoard.wallCollision(
                this.x,
                this.y,
                this.requestedMovingDirection
            )
            )

            this.currentMovingDirection = this.requestedMovingDirection;
        }
    }

    if(this.gameBoard.wallCollision(
        this.x, 
        this.y, 
        this.currentMovingDirection
        )
        ) {
            return;
        } else if 
        (this.currentMovingDirection != null &&
         this.pacmanAnimationTimer == null
         ) {
            this.pacmanAnimationTimer = this.pacmanAnimationDefault;
         }

        switch (this.currentMovingDirection) {
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

    #animate() {
        if(this.pacmanAnimationTimer ==  null) {
            return;
        }
        this.pacmanAnimationTimer --;
        if(this.pacmanAnimationTimer ==0) {
            this.pacmanAnimationTimer = this.pacmanAnimationDefault;
            this.pacmanImageIndex++;
            if(this.pacmanImageIndex == this.pacmanImages.length)
            this.pacmanImageIndex = 0;
        }
    }
}

