import {PowerBar} from './power-bar.js';

export default class Player {
    constructor(game, numTurns, clock) {
        this.game = game;
        this.score = 0;
        this.numTurns = numTurns;
        this.clock = clock;
    }

    addScore(score) {
        this.score += score;
    };

    printTime() {
        
    }
};