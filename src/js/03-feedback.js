import throttle from "lodash.throttle";

const form = document.querySelector("form");
const SAVE_MESSAGE = "feedback-form-state";
const email = form.elements.email.value;
const message = form.elements.message.value;

form.addEventListener("submit", getFeedback)
function getFeedback(event) {
    event.preventDefault();
    const jsonStr = localStorage.getItem(SAVE_MESSAGE);
    if (jsonStr) {
        const formData = JSON.parse(jsonStr);
        console.log(formData);
        localStorage.removeItem(SAVE_MESSAGE);
        form.reset()
    }
};

document.addEventListener("DOMContentLoaded", checkData);
function checkData(event) {
    const savedData = localStorage.getItem(SAVE_MESSAGE);

    if (savedData) {
        const savedDataForm = JSON.parse(savedData);
        form.elements.email.value = savedDataForm.email;
        form.elements.message.value = savedDataForm.message;
    }
}


const saveData = () => {
    const user = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    const jsonThrottle = JSON.stringify(user);
    localStorage.setItem(SAVE_MESSAGE,jsonThrottle)
}
const throttleData = throttle(saveData, 500);
form.addEventListener('input', throttleData);