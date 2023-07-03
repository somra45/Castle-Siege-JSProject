export default class Wall {
    constructor(health, ctx) {
        this.ctx = ctx;
        this.dWidth = 120;
        this.dHeight = 120;
        this.health = health;
        this.position = [545, 330];
    }

    drawCastle(ctx, health) {
        let castleImage = document.getElementById('castle-image');
        if (health < 75 && health >= 33) {
            castleImage = document.getElementById('castle-image-damaged');
        } else if (health < 33) {
            castleImage = document.getElementById('castle-image-destroyed');
        } 
        ctx.drawImage(castleImage, this.position[0], this.position[1], this.dWidth, this.dHeight);
    };
};