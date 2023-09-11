import CastleSiege from "./scripts/game.js";
import {addClock, Clock} from "./scripts/clock.js";
import PowerBar from "./scripts/power-bar.js";
import GameView from "./scripts/game-view.js";
import Angle  from "./scripts/angle.js";
import Player from "./scripts/player.js";

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("siege-game");
    const ballistaImage = new Image();
    ballistaImage.src = './assets/images/ballista.png'

    const castle1 = new CastleSiege(canvas);
    const clockDiv = document.getElementById("clock-container");
    const clock = new Clock();
    const player1 = new Player(castle1, 20, clock);
    const angle = new Angle(castle1);
    const powerBar = new PowerBar();
    const devLinks = document.querySelector(".links");

    addClock(clock.timeString, clockDiv, 'siege-clock', 'button');

    setInterval(() => addClock(clock.timeString, clockDiv, 'siege-clock', 'button') , 1000);

    setInterval(() => powerBar.oscillate(), 40)

    document.addEventListener("mouseover", function(event) {
        if (!angle.stop) {
            const angleContext = angle.getMousePos(event);
            angle.drawAngle(angleContext);
        }; 
    });

    document.addEventListener("keydown", function(event) {
        if (event.code === 'Space') {
            powerBar.stop = !powerBar.stop;
            powerBar.currentPower();
        }
    });

    setInterval(() => {
        if (player1.game.start) {
            player1.printTime()
        }
    } , 1000);

    document.addEventListener("keydown", function pressEnter(event) { 
        if (event.code === 'Enter' && !window.launched) {
            if (player1.numTurns > 1) {
                const shot = new GameView(castle1, castle1.ctx, clock);
                powerBar.stop = false;
                angle.stop = false;
                shot.start();
                player1.printScore(castle1, 'score-box', 'score');
                player1.printTurns();
            } else if (player1.numTurns === 1 || castle1.health <= 0 && !window.launched){
                const shot = new GameView(castle1, castle1.ctx, clock);
                powerBar.stop = true;
                angle.stop = true;
                shot.start();
                player1.printScore(castle1, 'score-box', 'score');
                player1.printTurns();
                castle1.gameOver(player1);
            }
        }
    });

    devLinks.addEventListener("click", function () {
        const linksContainer = document.querySelector(".links-container");
        linksContainer.classList.toggle("hide-links")
    });
});


