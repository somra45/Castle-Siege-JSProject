import { addClock } from "./clock.js";

export default class Player {
    constructor(game, numTurns, clock) {
        this.game = game;
        this.score = 0;
        this.numTurns = numTurns;
        this.clock = clock;
        this.elapsedSeconds = 1;
        this.elapsedMinutes = 0;
        this.elapsedHours = 0;
        this.health = 100.1
    }

    printScore(castle, parentElement, className) {
        this.score += Math.floor((this.health - castle.health)*1000 - 
        (this.elapsedMinutes + 1 + this.elapsedSeconds/60) * 750)
        this.health = castle.health
        if (castle.health <= 0) {
            this.score += 20000
        }
        const newPTag = document.createElement(`button`);
        newPTag.innerText = `Score: ${this.score}`;
        newPTag.classList.add(`${className}`);
        const scoreDiv = document.querySelector(`.${parentElement}`);
        if (scoreDiv.children.length > 0 ) {
            scoreDiv.removeChild(scoreDiv.children[0]);
            scoreDiv.appendChild(newPTag);
        } else {
            scoreDiv.appendChild(newPTag);
        }
    };

    printTurns() {
        this.numTurns -= 1;
        const newPTag = document.createElement(`button`);
        newPTag.innerText = `Turns Left: ${this.numTurns}`;
        newPTag.classList.add(`turn-counter`);
        const scoreDiv = document.getElementById('turns');
        if (scoreDiv.children.length > 0 ) {
            scoreDiv.removeChild(scoreDiv.children[0]);
            scoreDiv.appendChild(newPTag);
        } else {
            scoreDiv.appendChild(newPTag);
        }
    };

    printTime() {
        this.elapsedSeconds += 1;
        if (this.elapsedSeconds === 60) {
            this.elapsedMinutes += 1;
            this.elapsedSeconds = 0;
        };
    
        if (this.elapsedMinutes === 60) {
            this.elapsedHours += 1;
            this.elapsedMinutes = 0;
        };

        this.elapsedTime = `Elapsed Time: ${this.elapsedHours}:${this.elapsedMinutes}:${this.elapsedSeconds}`;
        const clockDiv = document.getElementById('elapsed-box');
        addClock(this.elapsedTime, clockDiv, 'elapsed-clock', 'button');
    }

};