const container = document.querySelector(".container");
let toggle;
let colorOn = true;
let rainbowOn = false;

const colorMode = document.querySelector(".color-mode");
colorMode.setAttribute("id", "animate");
const rainbowMode = document.querySelector(".rainbow-mode");
const erase = document.querySelector(".eraser");

colorMode.addEventListener("click", () => {
    colorOn = true;
    rainbowOn = false;
    colorMode.setAttribute("id", "animate");
    erase.removeAttribute("id");
    rainbowMode.removeAttribute("id");
});
rainbowMode.addEventListener("click", () => {
    colorOn = false;
    rainbowOn = true;
    rainbowMode.setAttribute("id", "animate");
    colorMode.removeAttribute("id");
    erase.removeAttribute("id");
});
erase.addEventListener("click", () => {
    colorOn = false;
    rainbowOn = false;
    erase.setAttribute("id", "animate");
    colorMode.removeAttribute("id");
    rainbowMode.removeAttribute("id");
    enable("white");
});

// Color input field
const colorPick = document.querySelector(".rgb");
const colorLabel = document.querySelector(".colorwrap");
colorPick.addEventListener("change", () => {
    colorLabel.style.backgroundColor = colorPick.value;
    if (colorOn) {
        enable(colorPick.value);
    }        
});

// Create starting grid
makeBoard(16);
enable(colorPick.value);

// Creates grid of given size
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

// New board when user enters new size
const inputSize = document.querySelector(".size");
inputSize.addEventListener("change", () => {
    if (inputSize.value <= 100 && inputSize.value >= 8) {
        while (container.firstElementChild) {
            container.firstElementChild.remove();
        }
        makeBoard(inputSize.value);
        enable(colorPick.value);
    } else {
        alert("Size must be between 8 and 100.\nEnter a new number.");
    }
});

// Stop drawing when release mouse
const body = document.querySelector("body");
body.addEventListener("mouseup", () => {
    toggle = false;
});
body.addEventListener("dragstart", () => {
    toggle = false;
});

// Enable/Disable drawing on grid
function enable(color) {
    const buttons = document.querySelectorAll("#box");
    buttons.forEach((button) => {
        button.addEventListener("mousedown", () => {
            toggle = true;
            button.style.backgroundColor = color;
        });
        button.addEventListener("mouseover", () => {
            if (toggle) button.style.backgroundColor = color;
        });
    });
}