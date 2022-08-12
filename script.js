function makeBoard(num) {
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "box");
        container.appendChild(div);
    }
}

makeBoard(16);