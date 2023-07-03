import Wall from "./wall.js";
import Player from "./player.js";
import Catapult from "./catapult.js";
import Arrow from "./arrow.js";
import {currentHealth} from "./health-bar.js";
import PowerBar from "./power-bar.js";

export default class CastleSiege {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height};
        this.health = 100;
        this.wall = new Wall(this.health, this.ctx);
        this.player = new Player(this.ctx);
        this.catapult = new Catapult(this.ctx);
        this.drawBackground = this.drawBackground.bind(this);
        this.drawBackground(this.ctx);
        this.drawClouds(this.ctx);
        this.catapult.drawBallistaPieces(this.ctx);
        currentHealth(this.health);
        this.arrow = new Arrow(this.ctx);
        this.power = 50
        this.angle = 23;
        this.dirx = 0.4 * (this.power/10);
        this.diry = -0.1 * (this.power/10);
        this.degrees = 4 * (this.angle/100);
        this.gravity = 0.0038 * (this.power/100) * this.angle / 90;
        this.rotateArc = 0.17 * (this.angle/50);
        this.clouddx = 1;
        this.stop = false;
        this.damage = 10
        this.hitGround = this.hitGround.bind(this);
        this.hitOffScreen = this.hitOffScreen.bind(this)
    };

    drawBackground(ctx) {
        let width = this.dimensions.width;
        let height = this.dimensions.height;
        ctx.fillStyle = 'rgb(165, 223, 249)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#28b259';
        ctx.fillRect(0, 390, this.dimensions.width, 200);
        let wallObject = this.wall.wallobj;
        this.wall.drawCastle(ctx, wallObject);
    };

    drawClouds(ctx, clouddx = false, truex) {
        const cloudImage = document.getElementById("clouds")
        let sx = 0;
        let sy = 0;
        let sWidth = 480;
        let sHeight = 450;
        let dx = 0;
        let dy = 0;
        let dWidth = 100;
        let dHeight = 100;
        if (clouddx) {
            dx += clouddx % 640
        }
        // need to get all of this into an animation function, and it could 
        //be moving clouds
        truex = dx + 30;
        ctx.drawImage(cloudImage, sx, sy, sWidth, sHeight, truex, dy, 
            dWidth, dHeight);
        truex = dx + 170;
        ctx.drawImage(cloudImage, sx + 500, sy + 450, sWidth + 500, sHeight + 500,
        dx + 170, dy + 90, dWidth + 200, dHeight + 200);
        truex = dx + 280;
        ctx.drawImage(cloudImage, sx, sy + 180, sWidth, sHeight, dx + 280, dy + 230, 
            dWidth, dHeight -30);
        truex = dx;
        ctx.drawImage(cloudImage, sx + 1000, sx + 500, sWidth + 600, sHeight + 500,
            truex, dy + 110, dWidth + 100, dHeight + 100);
        truex = dx + 370;
        ctx.drawImage(cloudImage, 500, 650, sWidth + 680, sHeight,
            truex, dy + 10, dWidth + 200, dHeight);
        truex = dx + 70; 
        ctx.drawImage(cloudImage, sx + 465, sy + 650, sWidth + 590, sHeight,
            dx + 225, dy + 78, dWidth + 200, dHeight - 20);
        truex = dx + 150;
        ctx.drawImage(cloudImage, sx, sy + 150, sWidth, sHeight, truex, 
            dy, dWidth, dHeight);
        truex = dx + 57;
        ctx.drawImage(cloudImage, sx, sy + 60, sWidth, sHeight, truex, 
            dy + 290, dWidth, dHeight);
    };  

    frameMove(ctx, timeDelta) {
        ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawBackground(ctx);
        this.clouddx += 0.3;
        this.drawClouds(ctx, this.clouddx);
        this.wall.drawCastle(ctx, this.health);
        this.catapult.drawBallistaPieces(ctx);
        this.diry += this.gravity + ((this.degrees*this.degrees)/900000);
        this.dirx -= (this.gravity + timeDelta/100)/(this.power) - 1/this.power/100;
        this.degrees += this.rotateArc;
        if (!this.isCollision() && !this.hitGround() && !this.hitOffScreen()) {
            this.stop = false;
            this.arrow.launch(ctx, this.degrees, this.dirx, this.diry);
        } else if (this.isCollision()){
            this.health -= this.damage
            this.playerMove(ctx)
        } else if (this.hitGround() || this.hitOffScreen()) {
            this.playerMove(ctx)
        }

    };

    isCollision() {
        let wallHitbox = [this.wall.position[0], this.wall.position[1]];
        if ((this.arrow.dx - 140 >= wallHitbox[0]  + 45
            || this.arrow.dx - 118 >= wallHitbox[0]  + 45)
            && (this.arrow.dy + 22 >= wallHitbox[1] - 80 || 
            this.arrow.dy + 32 >= wallHitbox[1] - 80)) {
                return true;
        } else return false;
    };

    hitGround() {
        if (this.arrow.dy > 360) {
            return true;
        } else return false;
    };

    hitOffScreen() {
        if (this.arrow.dx > 780 || this.arrow.dy > 360 || this.arrow.dy < 0 ) {
            return true;
        } else return false;
    }

    isGameOver() {
        if (this.health <= 0) return true;
        else return false;
    }

    playerMove(ctx) {
        this.stop = true;
        this.arrow.launch(ctx, this.degrees, this.dirx, this.diry);
        currentHealth(this.health);
        this.reset(ctx)
        this.arrow.reset(ctx);
    }
    
    reset(ctx) {
        this.angle = 23;
        this.dirx = 0.4 * (this.power/10);
        this.diry = -0.1 * (this.power/10);
        this.degrees = 4 * (this.angle/100);
        this.gravity = 0.0038 * (this.power/100) * this.angle / 90;
        this.rotateArc = 0.17 * (this.angle/50);
        this.clouddx = 1
    }
};