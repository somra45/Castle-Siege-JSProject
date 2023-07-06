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
projectile by using the mouse pointer to hover over the screen and move an arrow 
that selects the angle of the shot on click.

    const context = angleIndicator.getContext('2d');    
        const rectangle = angleIndicator.getBoundingClientRect();
        context.mouseObj =  { 
            x: event.clientX - rectangle.left,
            y: event.clientY - rectangle.top
        };
        return context;
    };

    drawAngle(ctx) {
    if (ctx.mouseObj.x >= 65 && ctx.mouseObj.y <= 370) {
        let deltaX = ctx.mouseObj.x - 65;
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
        let vectorX = 65 + 50 * Math.cos(radians)
        let vectorY = 370 - 50 * Math.sin(radians)
            ctx.beginPath();
            ctx.strokeStyle = '#0c662a';
            ctx.lineWidth = 5;
            ctx.moveTo(65, 370);
            ctx.lineTo(vectorX, vectorY);
            ctx.stroke();

Power Adjustment: Players can adjust the power of their shot by 
utilizing an oscillating power bar controlled by the spacebar. Timing and
precision are crucial for achieving the desired power level.

    oscillate() {
        this.acceleration = 1.05;
        this.accelerator = 1;
        this.deceleration = 0.95;
        if (!this.stop) {
            if (this.upwards) {
                if ((Math.pow(this.acceleration, this.accelerator) * this.power) <= 100) {
                    this.power *= Math.pow(this.acceleration, this.accelerator);
                } else {
                    this.upwards = false;
                    this.downwards = true;
                    this.accelerator = 1;
                }
            }
            if (this.downwards) {
                if ((Math.pow(this.deceleration, this.accelerator) * this.power) >= 15) {
                    this.power *= Math.pow(this.deceleration, this.accelerator);
                } else {
                    this.downwards = false;
                    this.upwards = true;
                    this.accelerator = 1;
                }
            };
        };
        this.currentPower();
        this.accelerator += 1;
    };

------------------------------------------------------------------------------
Features & Game Logic:
------------------------------------------------------------------------------

Physics Simulation: The game incorporates realistic physics, including factors 
such as gravity, angle, and air resistance(calculated using time), which affect 
the trajectory of the projectile as it moves every frame in a request animation 
frame loop. 

    frameMove(ctx, timeDelta) {
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawBackground(ctx);
        this.clouddx += 0.3;
        this.drawClouds(ctx, this.clouddx);
        this.wall.drawCastle(ctx, this.health);
        this.catapult.drawBallistaPieces(ctx);
        this.diry += (this.gravity/this.gravity/45) + ((this.angle)/8000);
        this.dirx -= (this.angle/10) * (this.gravity + timeDelta/100)/(this.power);
        if (!this.isCollision() && !this.hitGround() && !this.hitOffScreen()) {
            this.stop = false;
            this.arrow.launch(ctx, this.dirx, this.diry);
        } else if (this.isCollision()){
            this.health -= Math.floor(this.damage * Math.random() + this.power/10);
            this.playerMove(ctx);
        } else if (this.hitGround() || this.hitOffScreen()) {
            this.playerMove(ctx);
        }
    };

Features to add: 

1. Visual updates and improvements:
    * Finish animating the arrow at different angles according to where it is
    in the projectile trajectory, aim up at start, and gradually complete an arc
    until contact with ground or castle.
    * Increase the canvas range of motion, potentially use an offscreen canvas 
    to simulate an increased distance of shot and allow the user to scroll on the
    map. This will allow castles to be placed at longer and random distances, 
    adding another dimension of difficulty.
    * Make the page and features more reactive to screen size, currently can only
    be played on desktop browsers. 
2. High Score and damage updates:
    * add a local storage component to save high scores and display a leaderboard.
    * currently the damage is based on power and a degree of randomness, would
    like to implement a more robust damage calculation logic, as well as weak points in the castle walls that have their own hitbox.
3. Levels of Difficulty:
    * Add different castles that have varying hitboxes, are smaller and larger, 
    have varying max health as well as health regeneration.
4. Audio Effects:
    * Add audio/visual effects for the shot and collision. Also add some relaxing 
    background music.

------------------------------------------------------------------------------
Wireframe URL : https://wireframe.cc/3K69Cw
------------------------------------------------------------------------------