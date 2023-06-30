export default class Catapult {
    constructor(ctx) {
        this.ctx = ctx
        this.dWidth = 91
        this.dHeight = 76
        this.dx = 50
        this.dy = 360
        this.type = 'ballista'
        this.velocity = 3
    }

    drawBallista(ctx) {
        const ballistaImage = document.getElementById('ballista-image');
        ctx.drawImage(ballistaImage, this.dx, this.dy, this.dWidth, this.dHeight);
    };

    drawBallistaPieces(ctx) {
        const ballistaFrontWheel = document.getElementById('ballista-frontwheel');
        const ballistaBackWheel = document.getElementById('ballista-backwheel');
        const ballistaChassis = document.getElementById('ballista-chassis');
        const ballistaSpear = document.getElementById('ballista-spear');
        const ballistaBow = document.getElementById('ballista-bow');
        ctx.drawImage(ballistaChassis, this.dx + 4, this.dy + 23, this.dWidth/1.08, this.dHeight/1.8);
        ctx.drawImage(ballistaFrontWheel, this.dx + 50, this.dy + 54, this.dWidth/4, this.dHeight/3.5);
        ctx.drawImage(ballistaBackWheel, this.dx + 21, this.dy + 58, this.dWidth/5.2, this.dHeight/4.5);
        ctx.rotate((337 * Math.PI/180))
        // ctx.translate(50, 50)
        ctx.drawImage(ballistaBow, this.dx - 163, this.dy + 20, this.dWidth, this.dHeight/2.9)
        ctx.drawImage(ballistaSpear, this.dx - 140, this.dy + 22, this.dWidth/1.5, this.dHeight/7)
        ctx.restore()
    }

    move() {
        this.dx += velocity
    };
    
    launch(ctx, degrees, dirx, diry) {
        const ballistaSpear = document.getElementById('ballista-spear');
        this.dx = dx + dirx
        this.dy = dy + diry
        ctx.rotate((337 + degrees * Math.PI/180));
        ctx.drawImage(ballistaSpear, this.dx - 140, this.dy + 22, this.dWidth/1.5, this.dHeight/7);
    };
};