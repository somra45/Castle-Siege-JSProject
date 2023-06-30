import Wall from "./wall.js";
import Player from "./player.js";
import Catapult from "./catapult.js";
import Arrow from "./arrow.js";

export default class CastleSiege {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height};
        let wallobj = { dx: 480, dy: 274, dWidth: 200, dHeight: 200,
            health: 60}
        this.wall = new Wall(wallobj, this.ctx)
        this.wall.wallobj = wallobj;
        this.player = new Player(this.ctx)
        this.catapult = new Catapult(this.ctx)
        this.drawBackground = this.drawBackground.bind(this)
        this.drawBackground(this.ctx);
        this.catapult.drawBallistaPieces(this.ctx)
        this.arrow = new Arrow(this.ctx)
    }

    drawBackground(ctx) {
        let width = this.dimensions.width;
        let height = this.dimensions.height;
        ctx.fillStyle = 'rgb(165, 223, 249)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#28b259';
        ctx.fillRect(0, 400, this.dimensions.width, 200);
        let wallObject = this.wall.wallobj;
        this.drawClouds(ctx);
        this.wall.drawCastle(ctx, wallObject);
    };

    drawClouds(ctx, options = {}) {
        const cloudImage = document.getElementById("clouds")
        let sx = 0;
        let sy = 0;
        let sWidth = 480;
        let sHeight = 450;
        let dx = 0;
        let dy = 0;
        let dWidth = 100;
        let dHeight = 100;
        if (options !== {}) {
            sx = options.sx || 0;
            sy = options.sy || 0;
            sWidth = options.sWidth || 480;
            sHeight = options.sHeight || 450;
            dx = options.dx || 0;
            dy = options.dy || 0;
            dWidth = options.dWidth || 100;
            dHeight = options.dHeight || 100;
        }
        // need to get all of this into an animation function, and it could 
        //be moving clouds
        ctx.drawImage(cloudImage, sx, sy, sWidth, sHeight, dx + 30, dy, 
            dWidth, dHeight);
        ctx.drawImage(cloudImage, sx + 500, sx + 500, sWidth + 500, sHeight + 500,
        dx + 170, dy + 100, dWidth + 200, dHeight + 200);
        ctx.drawImage(cloudImage, sx, sy + 180, sWidth, sHeight, dx + 280, dy + 230, 
            dWidth, dHeight -30);
        ctx.drawImage(cloudImage, sx + 1000, sx + 500, sWidth + 600, sHeight + 500,
            dx + 0, dy + 110, dWidth + 100, dHeight + 100);
        ctx.drawImage(cloudImage, 500, 650, sWidth + 680, sHeight,
            dx + 370, dy + 10, dWidth + 200, dHeight);
        ctx.drawImage(cloudImage, sx + 465, sy + 650, sWidth + 590, sHeight,
            dx + 225, dy + 78, dWidth + 200, dHeight - 20);
        ctx.drawImage(cloudImage, sx, sy + 150, sWidth, sHeight, dx + 150, 
            dy, dWidth, dHeight);
        ctx.drawImage(cloudImage, sx, sy + 60, sWidth, sHeight, dx + 57, 
            dy + 290, dWidth, dHeight);
    };  

    frameMove(ctx, timeDelta) {
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawBackground(ctx);
        this.drawClouds(ctx);
        this.wall.drawCastle(ctx, this.wall.wallobj);
        this.catapult.drawBallistaPieces(ctx);
        this.arrow.launch(ctx, 1, 2.5, -0.1);
    };
};