const start = document.querySelector("button[data-start]");
const stop = document.querySelector("button[data-stop]");
const body = document.querySelector("body")
let timerColor;

stop.setAttribute("disabled", true);

start.addEventListener("click", handleColor);
function handleColor(e) {
    timerColor = setInterval(changeColor, 1000)
    start.setAttribute("disabled", true);
    stop.removeAttribute("disabled")
};
function changeColor() {
    const color = getRandomHexColor();
     console.log(`${color} ${Math.random()}}`);
    body.style.background = color;

}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

stop.addEventListener("click", handleStop);
function handleStop(e) {
    clearInterval(timerColor);
    stop.setAttribute("disabled", true);
    start.removeAttribute("disabled")
}