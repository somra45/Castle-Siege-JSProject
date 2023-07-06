export {currentHealth};

function currentHealth(wallHealth) {
    const health = document.querySelector(".health");
    health.style.width = `${wallHealth}%`;

    const newPTag = document.createElement("p");
    newPTag.innerText = `Wall Health: ${wallHealth}%`;
    newPTag.classList.add("health-indicator");
    if (health.children.length > 0) {
        health.removeChild(health.children[0]);
        health.appendChild(newPTag);
    } else {
        health.appendChild(newPTag);
    }
};
