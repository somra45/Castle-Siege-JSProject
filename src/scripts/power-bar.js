export default class PowerBar {
    constructor() {
        this.power = this.oscillate()
        // this.oscillate = this.oscillate.bind(this)
        this.currentPower(this.power)
    }

    currentPower(power) {
        const powerBar = document.querySelector(".power")
        powerBar.style.height = `${power}%`
    
        const newPTag = document.createElement("p")
        newPTag.innerText = `Power`
        newPTag.classList.add("power-indicator")
        if (powerBar.children.length > 0) {
            powerBar.removeChild(powerBar.children[0])
            powerBar.appendChild(newPTag)
        } else {
            powerBar.appendChild(newPTag)
        }
    };
    
    oscillate() {
        let random = Math.random() * 100
        
    }
};