const container = document.querySelector(".container");
let toggle;
function makeBoard(num) {
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
enable();
// New board when user enters new size
const inputSize = document.querySelector(".size");
inputSize.addEventListener("change", () => {
    if (inputSize.value <= 100 && inputSize.value >= 8) {
        while (container.firstElementChild) {
            container.firstElementChild.remove();
        }
        makeBoard(inputSize.value);
        enable();
    } else {
        alert("Size must be between 8 and 100! Enter a new number.");
    }
});

// Color input field
const colorPick = document.querySelector(".rgb");
const colorLabel = document.querySelector(".colorwrap");
colorPick.addEventListener("change", () => {
    colorLabel.style.backgroundColor = colorPick.value;
});

// Enable/Disable drawing on grid
function enable() {
    const buttons = document.querySelectorAll("#box");
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
    });
    
    body.addEventListener("dragstart", () => {
        toggle = false;
    });
}