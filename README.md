------------------------------------------------------------------------------
Castle Siege - Vanilla Javascript Browser Game
------------------------------------------------------------------------------
Description:
    
In Castle Siege players can launch projectiles at castle walls to win sieges
and conquer castles! In this game, players will take on the role of a skilled 
siege commander and aim their attacks to inflict maximum damage on the 
castle walls. The objective is to drop the castle defenses to 0 and claim 
victory. The score is based on time; Players must act quickly, as the score is 
decremented according to how much time has elapsed since the start of the game.
The challenge is to inflict as much damage as possible within the shortest time frame.

------------------------------------------------------------------------------
Technologies, Libraries, APIs
------------------------------------------------------------------------------
The project is coded using vanilla Javascript, CSS, and HTML. The game logic and
DOM manipulation is done using Javascript, while the game itself is drawn using 
canvas and image assets. 

------------------------------------------------------------------------------
Functionality & Controls:
------------------------------------------------------------------------------

Launch Projectiles: Players can control the trajectory of the 
projectile by using the mouse to click and drag an arrow that selects the 
angle of the shot.

    const context = angleIndicator.getContext('2d');    
        const rectangle = angleIndicator.getBoundingClientRect();
        context.mouseObj =  { 
            x: event.clientX - rectangle.left,
            y: event.clientY - rectangle.top
        };
        return context;
    };

    drawAngle(ctx) {
    if (ctx.mouseObj.x >= 70 && ctx.mouseObj.y <= 370) {
        let deltaX = ctx.mouseObj.x - 70;
        let deltaY = 370 - ctx.mouseObj.y;
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
        let vectorX = 70 + 50 * Math.cos(radians)
        let vectorY = 370 - 50 * Math.sin(radians)
            ctx.beginPath();
            ctx.strokeStyle = '#0c662a';
            ctx.lineWidth = 5;
            ctx.moveTo(70, 370);
            ctx.lineTo(vectorX, vectorY);
            ctx.stroke();

Power Adjustment: Players can adjust the power of their shot by 
utilizing an oscillating power bar controlled by the spacebar. Timing and
precision are crucial for achieving the desired power level.
------------------------------------------------------------------------------
Features & Game Logic:
------------------------------------------------------------------------------

Physics Simulation: The game will incorporate realistic physics, 
including factors such as gravity, angle, and air resistance(calculated using time), which will affect the trajectory of the projectile. 

High Score and Progression: The game tracks players' scores based 
on the damage inflicted and the time taken to complete each siege. 
Players can strive to beat personal high scores, or be a better siege master 
than their friends(or enemies). Local storage coming soon.



------------------------------------------------------------------------------
Wireframe URL : https://wireframe.cc/3K69Cw
------------------------------------------------------------------------------