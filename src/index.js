import CastleSiege from "./scripts/game.js";
import {addClock, Clock} from "./scripts/clock.js";
import PowerBar from "./scripts/power-bar.js";
import GameView from "./scripts/game-view.js";
import Angle  from "./scripts/angle.js";

document.addEventListener("DOMContentLoaded", function() {
    const clockDiv = document.getElementById("clock-container");
    let clock = new Clock();
    addClock(clock.timeString, clockDiv);

    setInterval(() => addClock(clock.timeString, clockDiv) , 1000);

    const canvas = document.getElementById("siege-game");
    let powerBar = new PowerBar();
    setInterval(() => powerBar.oscillate(), 40)

    const angle = new Angle();
    document.addEventListener("mouseover", function(event) {
        if (!angle.stop) {
            const angleContext = angle.getMousePos(event);
            angle.drawAngle(angleContext);
        }; 
    });

    document.addEventListener("keydown", function(event) {
        if (event.code === 'ShiftLeft') {
            angle.stop = !angle.stop;
            castle1.angle = window.myAngle
        };
    });   

    document.addEventListener("keydown", function(event) {
        if (event.code === 'Space') {
            powerBar.stop = !powerBar.stop;
            powerBar.currentPower();
        }
    });
    const castle1 = new CastleSiege(canvas);
    let shotCounter = 1;

    document.addEventListener("keydown", function(event) { 
        if (event.code === 'Enter'){
            shotCounter++;
            const shot = new GameView(castle1, castle1.ctx, clock);
            shot.start();
        }
    });

    if (castle1.isGameOver()) { 
        return; // add game over logic, callback to render modal of game over 
                // screen and score, etc.
    }
});


