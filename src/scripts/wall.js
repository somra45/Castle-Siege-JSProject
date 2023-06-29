export default class Wall {
    constructor(wallObject, ctx) {
        this.ctx = ctx;
        this.width = wallObject.width;
        this.height = wallObject.height;
        this.health = wallObject.health;
    }
};