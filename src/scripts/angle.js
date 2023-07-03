export { getMousePos, drawAngle } 

function getMousePos(canvas, event) {
    const rectangle = canvas.getBoundingClientRect();
    const mouseObj =  { 
        x: event.clientX - rectangle.left,
        y: event.clientY - rectangle.top
    };
    return mouseObj;
};

function drawAngle(ctx, mousePos) {
    if (mousePos.x >= 70 && mousePos.y <= 370) {
        let deltaX = mousePos.x - 70;
        let deltaY = 370 - mousePos.y;
        let radians = Math.atan2(deltaY, deltaX);
        let angle = radians * (180 / Math.PI);
        window.myAngle = angle;
        let vectorX = 70 + 50 * Math.cos(radians)
        let vectorY = 370 - 50 * Math.sin(radians)
        ctx.beginPath();
        ctx.moveTo(70, 370);
        ctx.lineTo(vectorX, vectorY);
        ctx.stroke();
    }
};