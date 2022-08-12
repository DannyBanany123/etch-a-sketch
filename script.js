function makeBoard(num) {
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "box");
        div.style.userSelect = "none";
        container.appendChild(div);
    }
}

makeBoard(16);

let toggle;
const buttons = document.querySelectorAll(".container > div");
buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
        toggle = true;
        button.style.backgroundColor = "black";
    });
    button.addEventListener("mouseover", () => {
        if (toggle) button.style.backgroundColor = "black";
    });
});

const body = document.querySelector("body");
body.addEventListener("mouseup", () => {
    toggle = false;
})