export default class PowerBar {
    constructor() {
        const powerBar = document.getElementById("power-bar");
        this.ctx = powerBar.getContext("2d");
        this.power = 10;
        window.myPower = this.power;
        this.currentPower = this.currentPower.bind(this);
        this.currentPower();
        this.oscillate = this.oscillate.bind(this);
        this.upwards = true;
        this.downwards = false;
        this.stop = false;
    };

    currentPower() {
        this.ctx.clearRect(0, 0, 45, 480);
        this.ctx.fillStyle = "red";
        let height = -480 * (this.power/100);
        this.ctx.fillRect(0, 480, 45, height);
        const div = document.getElementById('power-canvas');
        const printPower = document.createElement("p");
        printPower.innerText = `${Math.floor(this.power)}`;
        printPower.classList.add('power-indicator')
        if (div.children.length > 1) {
            div.removeChild(div.children[1]);
            div.appendChild(printPower);
        } else {
            div.appendChild(printPower);
        }
        window.myPower = this.power;
    };

    oscillate() {
        this.acceleration = 1.05;
        this.accelerator = 1;
        this.deceleration = 0.95;
        if (!this.stop) {
                    if (this.upwards) {
            if ((Math.pow(this.acceleration, this.accelerator) * this.power) <= 100) {
                this.power = Math.pow(this.acceleration, this.accelerator) * this.power;
            } else {
                this.upwards = false;
                this.downwards = true;
                this.accelerator = 1;
            }
        }
        if (this.downwards) {
            if ((Math.pow(this.deceleration, this.accelerator) * this.power) >= 15) {
                this.power = Math.pow(this.deceleration, this.accelerator) * this.power;
            } else {
                this.downwards = false;
                this.upwards = true;
                this.accelerator = 1;
            }
        }
        }
        this.currentPower();
        this.accelerator += 1;
    };
};


