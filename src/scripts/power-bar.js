class PowerBar {
    constructor(power) {
        this.power = power
        this.currentPower = this.currentPower.bind(this)
        this.currentPower(this.power)
    }

    currentPower() {
        const powerBar = document.querySelector(".power")
        powerBar.style.height = `${this.power}%`
    
        const newPTag = document.createElement("p")
        newPTag.innerText = `${100 - this.power}`
        newPTag.classList.add("power-indicator")
        if (powerBar.children.length > 0) {
            powerBar.removeChild(powerBar.children[0])
            powerBar.appendChild(newPTag)
        } else {
            powerBar.appendChild(newPTag)
        }
    };

};

const oscillate = function(player) {
    let acceleration = 1.15
    if (player.power.power < 100) {
        player.power.power *= acceleration;
        return player.power = new PowerBar(player.power.power);
    } else if (player.power.power  >= 100) {
        player.power.power  *= 1/acceleration;
        return player.power = new PowerBar(player.power.power);
    } else if (player.power.power  === 0) {
        player.power.power += 5;
        return player.power = new PowerBar(player.power.power);
    }
};

export {oscillate, PowerBar}