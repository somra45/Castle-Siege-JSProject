export default class Angle {
    constructor(game) {
        this.angle = 15;
        this.stop = false;
        this.getMousePos = this.getMousePos.bind(this);
        this.drawAngle = this.drawAngle.bind(this);
        this.game = game;
    }
    
    getMousePos(event) {
        const angleIndicator = document.createElement('canvas');
        angleIndicator.classList.add('angle-indicator');
        angleIndicator.height = '480';
        angleIndicator.width = '640';
        this.canvas = angleIndicator;
        const angleDiv = document.getElementById('angle-div');
        if (angleDiv.children.length > 0) {
            angleDiv.removeChild(angleDiv.children[0]);
            angleDiv.appendChild(angleIndicator);
        } else {
            angleDiv.appendChild(angleIndicator);
        }
        const context = angleIndicator.getContext('2d');    
        const rectangle = angleIndicator.getBoundingClientRect();
        context.mouseObj =  { 
            x: event.clientX - rectangle.left,
            y: event.clientY - rectangle.top
        };
        return context;
    };

    drawAngle(ctx) {
    if (ctx.mouseObj.x >= 65 && ctx.mouseObj.y <= 392) {
        let deltaX = ctx.mouseObj.x - 65;
        let deltaY = 392 - ctx.mouseObj.y;
        let radians = Math.atan2(deltaY, deltaX);
        let angle = radians * (180 / Math.PI);
        if (angle > 75) {
            angle = 75;
            radians = 75 / (180 / Math.PI);
        } else if (angle < 15) {
            angle = 25;
            radians = 25 / (180 / Math.PI);
        }
        window.myAngle = angle;
        let vectorX = 65 + 50 * Math.cos(radians)
        let vectorY = 392 - 50 * Math.sin(radians)
            ctx.beginPath();
            ctx.strokeStyle = '#0c662a';
            ctx.lineWidth = 5;
            ctx.moveTo(65, 392);
            ctx.lineTo(vectorX, vectorY);
            ctx.stroke();
            ctx.lineTo(vectorX - 20, vectorY*1.035 - 12);
            ctx.stroke();
            ctx.moveTo(vectorX, vectorY)
            ctx.lineTo(vectorX* 0.85 + 15, vectorY*1.031 + 12);
            ctx.stroke();
            ctx.closePath();
        };
        let that = this;
        this.canvas.addEventListener("mousedown", function(event) {
            that.stop = !that.stop;
            that.game.angle = window.myAngle;
        });
    };
};
