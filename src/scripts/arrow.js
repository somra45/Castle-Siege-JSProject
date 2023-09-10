export default class Arrow {
    constructor(ctx) {
        this.dx = 46;
        this.dy = 326;
        this.dWidth = 120.67;
        this.dHeight = 100.86;
        this.ctx = ctx;
        this.draw = this.draw.bind(this);
        this.draw(ctx);
    };

    draw(ctx) {
        const ballistaSpear = document.getElementById('ballista-spear8');
        ctx.drawImage(ballistaSpear, this.dx, this.dy, this.dWidth, this.dHeight);
    }

    launch(ctx, dirx, diry) {
        this.dx += dirx;
        this.dy += diry;
        let ballistaSpear = document.getElementById('ballista-spear8');
        if (this.dx >= 60 && this.dx < 95 ) {
            ballistaSpear = document.getElementById('ballista-spear7')
        }
        if (this.dx >= 95  && this.dx < 130 ) {
            ballistaSpear = document.getElementById('ballista-spear6')
        }
        if (this.dx >= 130 && this.dx < 165 ) {
            ballistaSpear = document.getElementById('ballista-spear5')
        }
        if (this.dx >= 165 && this.dx < 200 ) {
            ballistaSpear = document.getElementById('ballista-spear4')
        }
        if (this.dx >= 200 && this.dx < 235) {
            ballistaSpear = document.getElementById('ballista-spear3')
        }
        if (this.dx >= 235 && this.dx < 270) {
            ballistaSpear = document.getElementById('ballista-spear2')
        }
        if (this.dx >= 270 && this.dx < 305) {
            ballistaSpear = document.getElementById('ballista-spear1')
        }
        if (this.dx >= 305 && this.dx < 340) {
            ballistaSpear = document.getElementById('ballista-spear9')
        }
        if (this.dx >= 340 && this.dx < 375) {
            ballistaSpear = document.getElementById('ballista-spear10')
        }
        if (this.dx >= 375 && this.dx < 410) {
            ballistaSpear = document.getElementById('ballista-spear11')
        }
        if (this.dx >= 410 && this.dx < 445) {
            ballistaSpear = document.getElementById('ballista-spear12')
        }
        if (this.dx >= 445 && this.dx < 480) {
            ballistaSpear = document.getElementById('ballista-spear13')
        }
        if (this.dx >= 480 && this.dx < 515) {
            ballistaSpear = document.getElementById('ballista-spear14')
        }
        if (this.dx >= 515 && this.dx < 550) {
            ballistaSpear = document.getElementById('ballista-spear15')
        }
        if (this.dx >= 550) {
            ballistaSpear = document.getElementById('ballista-spear16')
        }
        ctx.drawImage(ballistaSpear, this.dx, this.dy, this.dWidth, this.dHeight);
    };

    reset(ctx) {
        this.dx = 46;
        this.dy = 326;
        this.draw(ctx);
    }
};