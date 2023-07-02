export default class Arrow {
    constructor(ctx) {
        this.dx = 50;
        this.dy = 360;
        this.dWidth = 60.67;
        this.dHeight = 10.86;
        this.ctx = ctx;
        this.draw(ctx);
    };

    draw(ctx) {
        const ballistaSpear = document.getElementById('ballista-spear');
        ctx.save()
        ctx.rotate((337 * Math.PI/180));
        ctx.drawImage(ballistaSpear, this.dx - 140, this.dy + 22, this.dWidth, this.dHeight);
        ctx.restore();
    }

    launch(ctx, degrees, dirx, diry) {
        const ballistaSpear = document.getElementById('ballista-spear');
        this.dx += dirx;
        this.dy += diry;
  
        ctx.save()
        ctx.rotate(((337 + degrees) * Math.PI/180));
        ctx.drawImage(ballistaSpear, this.dx - 140, this.dy + 22, this.dWidth, this.dHeight);
        ctx.restore();
    };

    reset(ctx) {
        this.dx = 50;
        this.dy = 360;
        this.draw(ctx);
    }
};