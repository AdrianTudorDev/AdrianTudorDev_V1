export default class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica'
        this.liveImage = lives;

    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = `${this.fontSize}px ${this.fontFamily}`;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        // score
        context.fillText(`Score: ${this.game.score}`, 20, 50);
        // timer
        context.font = `${this.fontSize * 0.8}px ${this.fontFamily}`;
        context.fillText(`Timer: ${(this.game.time * 0.001).toFixed(1)}`, 20, 80);
        // lives
        for (let i = 0; i < this.game.lives; i++) {
            context.drawImage(this.liveImage, 20 + 25 * i, 95, 25, 25);            
        }        
        // game over messages
        if (this.game.gameOver) {
            context.textAlign = 'center';            
            if (this.game.score > this.game.winningScore) {
                context.font = `${this.fontSize * 2}px ${this.fontFamily}`;
                context.fillText(`Boo-yah!`,
                    this.game.width * 0.5, 
                    this.game.height * 0.5 - 20); 
                context.font = `${this.fontSize * 0.7}px ${this.fontFamily}`;
                context.fillText(`What are creatures of the dark afraid of? YOU!!`,
                        this.game.width * 0.5, 
                        this.game.height * 0.5 + 20);    
                context.font = `${this.fontSize * 1.2}px ${this.fontFamily}`;
                context.fillText(`Press ENTER to restart the game`,
                        this.game.width * 0.5, 
                        this.game.height * 0.5 + 70);           
            } else {
                context.font = `${this.fontSize * 2}px ${this.fontFamily}`;
                context.fillText(`Love at first bite?`,
                    this.game.width * 0.5, 
                    this.game.height * 0.5 - 20); 
                context.font = `${this.fontSize * 0.7}px ${this.fontFamily}`;
                context.fillText(`Nope. Better luck next time!`,
                        this.game.width * 0.5, 
                        this.game.height * 0.5 + 20);
                context.font = `${this.fontSize * 1.2}px ${this.fontFamily}`;
                context.fillText(`Press ENTER to restart the game`,
                        this.game.width * 0.5, 
                        this.game.height * 0.5 + 70);  
            };
        };
        context.restore();
    }
}