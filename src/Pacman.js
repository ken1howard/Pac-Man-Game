export default class Pacman {
    constructor(x,y,gameSize, velocity, gameBoard) {
        this.x = x;
        this.y = y;
        this.gameSize = gameSize;
        this.velocity = velocity;
        this.gameBoard = gameBoard;
        this.#loadPacmanImages();
    }

    draw(ctx){
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
        pacmanImage3.src = '../images/Open.png';

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
}

