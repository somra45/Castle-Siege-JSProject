import Wall from "./wall.js"
import Player from "./player.js"

export default class CastleSiege {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height};
        this.drawBackground(this.ctx);
        let wallobj = { width: canvas.width/10, height: canvas.height/10,
            health: 100
        }
        this.wall = new Wall(wallobj, this.ctx)
        this.wall.wallobj = wallobj;
        this.player = new Player(this.ctx)
    }

    drawBackground(ctx) {
        let width = this.dimensions.width
        let height = this.dimensions.height
        ctx.fillStyle = 'rgb(165, 223, 249)'
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height)
        ctx.fillStyle = '#28b259'
        ctx.fillRect(0, 400, this.dimensions.width, 200)
        this.drawClouds(ctx)
        this.drawCastle(ctx)
    };

    drawClouds(ctx, options = {}) {
        const cloudImage = document.getElementById("clouds")
        // ctx.drawImage(cloudImage, sx, sy, sWidth, sHeight, 0, 0, 100, 100)
        let sx = 0
        let sy = 0
        let sWidth = 480
        let sHeight = 450
        let dx = 0
        let dy = 0
        let dWidth = 100
        let dHeight = 100

        // need to get all of this into an animation function, and it could 
        //be moving clouds
        ctx.drawImage(cloudImage, sx, sy, sWidth, sHeight, dx + 30, dy, 
            dWidth, dHeight)
        ctx.drawImage(cloudImage, 500, 500, sWidth + 500, sHeight + 500,
        170, 100, 300, 300)
        ctx.drawImage(cloudImage, sx, sy + 180, sWidth, sHeight, 280, 230, 
            dWidth, dHeight -30)
        ctx.drawImage(cloudImage, 1000, 500, sWidth + 600, sHeight + 500,
            0, 110, 200, 200)
        ctx.drawImage(cloudImage, 500, 650, sWidth + 680, sHeight,
            370, 10, 300, 100)
        ctx.drawImage(cloudImage, 465, 650, sWidth + 590, sHeight,
            225, 78, 300, 80)
            ctx.drawImage(cloudImage, sx, sy + 150, sWidth, sHeight, dx + 150, 
                dy, dWidth, dHeight)
            ctx.drawImage(cloudImage, sx, sy + 60, sWidth, sHeight, dx + 57, 
                dy + 290, dWidth, dHeight)
        };  

    drawCastle(ctx, options = {}) {
        const castleImage = document.getElementById('castle-image')
        if (options !== {}) {
            ctx.drawImage(castleImage, options.dx, options.dy, options.dWidth, 
                options.dHeight)
        }
        ctx.drawImage(castleImage, 480, 274, 200, 200)
    }
};