import CastleSiege from "./scripts/game.js";
import {addClock, Clock} from "./scripts/clock.js";
import {currentHealth} from "./scripts/health-bar.js";
import PowerBar from "./scripts/power-bar.js";
import GameView from "./scripts/game-view.js";

document.addEventListener("DOMContentLoaded", function() {
    const clockDiv = document.getElementById("clock-container");
    let clock = new Clock();
    addClock(clock.timeString, clockDiv);

    setInterval(() => addClock(clock.timeString, clockDiv) , 1000);

    const canvas = document.getElementById("siege-game");
    let powerBar = new PowerBar();
    setInterval(() => powerBar.oscillate(), 40)
    document.addEventListener("keydown", function(event) {
        if (event.code === 'Space') {
            powerBar.stop = !powerBar.stop;
            powerBar.currentPower()
        }
    });
    const castle1 = new CastleSiege(canvas);

    document.addEventListener("keydown", function(event) { 
        if (event.code === 'Enter'){
            const shot = new GameView(castle1, castle1.ctx, clock);
            shot.start();
        }
    });

    if (castle1.isGameOver()) { 
        return; // add game over logic, callback to render modal of game over 
                // screen and score, etc.
    }
});


