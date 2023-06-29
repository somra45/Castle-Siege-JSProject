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
        ctx.fillStyle = 'skyblue'
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height)
        ctx.fillStyle = '#28b259'
        ctx.fillRect(0, 400, this.dimensions.width, 200)
        this.drawClouds(ctx)
    };

    drawClouds(ctx) {
        // let x = 150
        // let y = 70
        // let radius = 20
        // let startAngle = 0
        // let endAngle = Math.PI
        // let clockwise = false
        // ctx.beginPath()
        // ctx.arc(x- 10, y - 20, radius, startAngle - 0.6, 0.6 * endAngle, true)
        // ctx.stroke()
        // ctx.arc(x, y, radius, startAngle + 1, endAngle, clockwise)
        // ctx.stroke()
        // ctx.arc(x + 20, y - 20, radius, 1 + startAngle, endAngle + 0.5, true)
        // ctx.stroke()
        // ctx.arc(x + 20, y, radius+5, startAngle - 0.5, 0.8 * endAngle, clockwise)
        // ctx.stroke()
        // ctx.closePath()
        // ctx.fillStyle = "white"
        // ctx.fill()
        const cloudImage = document.createElement("img")
        cloudImage.src = "../src/assets/images/clouds.jpg"
        ctx.drawImage(cloudImage, 0, 0, 0, 0, 100, 100 ,50, 50)
    }
};