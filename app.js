function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

// select the letter class in the DOM
const letters = document.querySelectorAll(".letter");

setInterval(() => {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);