const btn = document.querySelector('button');
const span = document.querySelector("span");
const body = document.querySelector("body")

btn.addEventListener("click", changeBk)

function changeBk(event) {
  const randomColor = getRandomHexColor();
  body.style.background = randomColor;
  span.textContent = randomColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}