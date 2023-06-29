export {currentHealth}

function currentHealth(wallObject) {
    const health = document.querySelector(".health")
    health.style.width = `${wallObject.health}%`

    const newPTag = document.createElement("p")
    newPTag.innerText = `Wall Health: ${wallObject.health}%`
    newPTag.classList.add("health-indicator")
    if (health.children.length > 0) {
        health.removeChild(health.children[0])
        health.appendChild(newPTag)
    } else {
        health.appendChild(newPTag)
    }
}
