export default class GameBoard {
    constructor (gameSize){
        this.gameSize = gameSize;

        this.whiteDot = new Image()
        this.whiteDot.src = '../Images/WhiteDot.png';

        this.wall =new Image ()
        this.wall.src = '../Images/GameboardWall.png';
        

    }

    board = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]


    draw(ctx) {
        for (let row = 0; row < this.board.length; row++){
            for(let column = 0; column < this.board[row].length; column++){
                let tile = this.board[row][column];
                if(tile ===1) {
                    this.#drawWall(ctx, column,row, this.gameSize);
                }
                else if (tile === 0) {
                this.#drawDot(ctx, column,row, this.gameSize);
                }
            }
        }
    //console.log('draw')
   }

   #drawDot(ctx, column,row, size){
    ctx.drawImage(
      this.whiteDot,
        column * this.gameSize,
        row * this.gameSize,
        size,
        size)
    }

#drawWall(ctx, column,row, size){
ctx.drawImage(
    this.wall,
    column * this.gameSize,
    row * this.gameSize,
    size,
    size)
}
   setCanvasSize(canvas){
    canvas.width = this.board[0].length * this.gameSize;
    canvas.height = this.board.length * this.gameSize;
   }
}