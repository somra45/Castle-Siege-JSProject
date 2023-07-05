export default class Arrow {
    constructor(ctx) {
        this.dx = 65;
        this.dy = 370;
        this.dWidth = 60.67;
        this.dHeight = 10.86;
        this.ctx = ctx;
        this.draw = this.draw.bind(this);
        this.draw(ctx);
    };

    draw(ctx) {
        const ballistaSpear = document.getElementById('ballista-spear0');
        ctx.drawImage(ballistaSpear, this.dx, this.dy, this.dWidth, this.dHeight);
    }

    launch(ctx, dirx, diry) {
        const ballistaSpear = document.getElementById('ballista-spear0');
        this.dx += dirx;
        this.dy += diry;
  
        ctx.drawImage(ballistaSpear, this.dx, this.dy, this.dWidth, this.dHeight);
    };

    reset(ctx) {
        this.dx = 65;
        this.dy = 370;
        this.draw(ctx);
    }
};