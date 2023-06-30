export default class Wall {
    constructor(wallObject, ctx) {
        this.ctx = ctx;
        this.dWidth = wallObject.width;
        this.dHeight = wallObject.height;
        this.health = wallObject.health;
        this.position = [wallObject.dx, wallObject.dy];
        this.wallObject = wallObject;
    }

    drawCastle(ctx, wallObject) {
        let castleImage = document.getElementById('castle-image');
        if (wallObject.health < 75 && wallObject.health >= 33) {
            castleImage = document.getElementById('castle-image-damaged');
        } else {
            castleImage = document.getElementById('castle-image-destroyed');
        }
        let dx = 480;
        let dy = 274;
        let dWidth = 200;
        let dHeight = 200;
        if (wallObject !== {}) {
            dx = wallObject.dx || 480;
            dy = wallObject.dy || 274;
            dWidth = wallObject.dWidth || 200;
            dHeight = wallObject.dHeight || 200;
        }
        ctx.drawImage(castleImage, dx, dy, dWidth, dHeight);
    };
};