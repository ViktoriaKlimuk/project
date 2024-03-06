const inputControl = document.querySelector("input");
const span = document.querySelector("span");

span.style.fontSize = inputControl.value + 'px'

function changes(event) {
    span.style.fontSize = inputControl.value + 'px';
}

inputControl.addEventListener("input", changes)