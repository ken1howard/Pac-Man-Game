export default class Enemy {
constructor (x,y,gameSize, velocity, gameBoard) {
    this.x = x;
    this.y = y;
    this.gameSize = gameSize;
    this.velocity = velocity;
    this.gameBoard = gameBoard;

    this.#loadImages();
}


    draw(ctx) {
        ctx.drawImage(this.image, 
            this.x, 
            this.y, 
            this.gameSize, 
            this.gameSize);
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
