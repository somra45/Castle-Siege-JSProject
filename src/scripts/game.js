export default class CastleSiege {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height};
        this.drawBackground(this.ctx);
    }

    drawBackground(ctx) {
        let width = this.dimensions.width
        let height = this.dimensions.height
        ctx.fillStyle = 'skyblue'
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height)
    }

    
}