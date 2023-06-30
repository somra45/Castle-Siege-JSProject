import CastleSiege from "./scripts/game.js";
import {addClock, Clock} from "./scripts/clock.js";
import {currentHealth} from "./scripts/health-bar.js";
import {PowerBar, oscillate} from "./scripts/power-bar.js";

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("siege-game");

    const castle1 = new CastleSiege(canvas);

    const clockDiv = document.getElementById("clock-container");
    let clock = new Clock();
    addClock(clock.timeString, clockDiv) ;

    setInterval(() => addClock(clock.timeString, clockDiv) , 1000);
    
    setInterval(currentHealth(castle1.wall.wallobj), 100);

});


