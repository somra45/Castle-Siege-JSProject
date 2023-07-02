export default class PowerBar {
    constructor(power) {
        const powerBar = document.getElementById("power-bar")
        this.power = power
        this.ctx = powerBar.getContext("2d")
        this.currentPower = this.currentPower.bind(this)
        this.currentPower()
    }

    currentPower() {
        this.ctx.fillStyle = "red"
        let height = -480 * (this.power/100) 
        this.ctx.fillRect(0, 480, 45, height)
    };

};

// const oscillate = function(player) {
//     let acceleration = 1.15
//     if (player.power.power < 100) {
//         player.power.power *= acceleration;
//         return player.power = new PowerBar(player.power.power);
//     } else if (player.power.power  >= 100) {
//         player.power.power  *= 1/acceleration;
//         return player.power = new PowerBar(player.power.power);
//     } else if (player.power.power  === 0) {
//         player.power.power += 5;
//         return player.power = new PowerBar(player.power.power);
//     }
// };

// export {oscillate, PowerBar}