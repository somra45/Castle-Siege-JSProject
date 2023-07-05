export default class GameView {
    constructor(game, ctx, clock) {
        this.game = game;
        this.ctx = ctx;
        this.clock = clock;
    };

    start() {
        this.lastTime = this.clock.minutes + this.clock.seconds/60;
        this.game.reset();
        this.game.start = true;
        this.clock.initialSeconds = this.clock.seconds
        this.clock.initialHours = this.clock.hours
        this.clock.initialMinutes = this.clock.minutes
        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        const timeDelta = this.clock.minutes + this.clock.seconds/60
        - this.lastTime;
        this.game.frameMove(this.ctx, timeDelta);
        if (!this.game.stop) {
            requestAnimationFrame(this.animate.bind(this));
        }
    };
};