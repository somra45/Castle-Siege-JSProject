import Clock from "./clock.js";

export default class GameView {
    constructor(game, ctx, clock) {
        this.game = game;
        this.ctx = ctx;
        this.clock = clock;
    };

    start() {
        this.lastTime = this.clock.timeString;
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(clock) {
        const timeDelta = clock.timeString - this.lastTime;
        this.game.frameMove(this.ctx, timeDelta);
        requestAnimationFrame(this.animate.bind(this));
    };
};