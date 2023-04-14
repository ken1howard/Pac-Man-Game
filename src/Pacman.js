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

        this.pacmanRotation = this.rotation.right;
        this.biteSound = new Audio ("../sounds/Bite.wav");

        this.cakeSound = new Audio ("../sounds/Munch.wav");
        this.cakeSoundActive = false;
        this.cakeAboutToExpire = false;
        this.timers = [];

        this.madeFirstMove = false;

        document.addEventListener("keydown", this.#keydown)

        this.#loadPacmanImages();
    }

    draw(ctx){
        this.#move();
        this.#animate();
        this.#eatFood();
        this.#eatCake();

        const  size = this.gameSize/2;

        ctx.save();
        ctx.translate(this.x + size, this.y + size)
        ctx.rotate((this.pacmanRotation * 65 * Math.PI)/ 100);
        ctx.drawImage( this.pacmanImages[this.pacmanImageIndex], 
            -size,
            -size, 
            this.gameSize, 
            this.gameSize
            );

            ctx.restore()
    }

        /*ctx.drawImage(
            this.pacmanImages[this.pacmanImageIndex],
            this.x, 
            this.y, 
            this.gameSize,
            this.gameSize 
            );*/
    

    rotation = {
        right: 0,
        down: 1,
        left: 2,
        up: 3,
    }
//Define the different stages of pacman through a const 
    #loadPacmanImages() {
        const pacmanImage1 = new Image();
        pacmanImage1.src = '../images/Closed.png';

        const pacmanImage2 = new Image();
        pacmanImage2.src = '../images/PartialOpen.png';

        const pacmanImage3 = new Image();
        pacmanImage3.src = '../images/OpenWide.png';

        const pacmanImage4 = new Image();
        pacmanImage4.src = '../images/PartialOpen.png';

        // Use and array to be able to draw images and an Index to have a starting image
        this.pacmanImages = [
            pacmanImage1,
            pacmanImage2,
            pacmanImage3,
            pacmanImage4,
        ];

        this.pacmanImageIndex = 0;
    }  


    // Put functions into the keys of your choosing to move pacman
    #keydown =(event) => {
//up
if (event.keyCode == 38){
    if(this.currentMovingDirection == MovingPacman.down)
    this.currentMovingDirection = MovingPacman.up;
    this.requestedMovingDirection = MovingPacman.up;
    this.madeFirstMove = true;
}
//down
if (event.keyCode == 40){
    if(this.currentMovingDirection == MovingPacman.up)
    this.currentMovingDirection = MovingPacman.down;
    this.requestedMovingDirection = MovingPacman.down;
    this.madeFirstMove = true;
}
//left
if (event.keyCode == 37){
    if(this.currentMovingDirection == MovingPacman.right)
    this.currentMovingDirection = MovingPacman.left;
    this.requestedMovingDirection = MovingPacman.left;
    this.madeFirstMove = true;
}
//right
if (event.keyCode == 39){
    if(this.currentMovingDirection == MovingPacman.left)
    this.currentMovingDirection = MovingPacman.right;
    this.requestedMovingDirection = MovingPacman.right;
    this.madeFirstMove = true;
}
    };
    #move() {

        // condition statement to move pacman within the grids on the game board

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
            this.pacmanAnimationTimer = null;
            this.pacmanImageIndex = 1;
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
            this.pacmanRotation = this.rotation.up;
            break;
            case MovingPacman.down:
            this.y += this.velocity;
            this.pacmanRotation = this.rotation.down;
            break;
            case MovingPacman.left:
            this.x -= this.velocity;
            this.pacmanRotation = this.rotation.left;
            break;
            case MovingPacman.right:
            this.x += this.velocity;
            this.pacmanRotation = this.rotation.right;
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

    #eatFood() {
        if(this.gameBoard.eatFood(this.x, this.y) && this.madeFirstMove) {
            this.biteSound.play();

        }
    }

    #eatCake () {
        if(this.gameBoard.eatCake(this.x, this.y)){
            this.cakeSound.play();
            this.cakeSoundActive = true;
            this.cakeAboutToExpire = false;
            this.timers.array.forEach((timer) => clearTimeout(timer));
            this.timers = [];

            let cakeTimer = setTimeout(() => {
                this.cakeSoundActive = false;
                this.cakeAboutToExpire = false;
            }, 1000 * 6)

            this.timer.push(cakeTimer)

            let cakeTimerAboutToExpireTimer = setTimeout (() => {
                this.cakeAboutToExpire = true;
            }, 1000 * 3);

            this.timers.push(cakeTimerAboutToExpireTimer);
        }
    }
}

