const colorBox = document.querySelector("#color-box");
let colors = ['red', 'blue', 'brown', 'black', 'green', 'indigo', 'magenta']
let previousColor = 'white';

document.addEventListener("click", () => {
    colorBox.innerHTML = "";
    let randomColor = colors[0];

    try {
        randomColor = colors[Math.floor(Math.random() * 8)];
        if (previousColor === randomColor) {
            randomColor = colors[Math.floor(Math.random() * 8)];
        }
        previousColor = randomColor;
    } catch (e) { }

    colorBox.style.backgroundColor = randomColor;
});
