const value = document.getElementById('name-input');
const name = document.getElementById('name-output');

value.addEventListener('input', (event) => {
    const inputValue = event.target.value.trim();
    name.textContent = inputValue || "Anonymous";

})
