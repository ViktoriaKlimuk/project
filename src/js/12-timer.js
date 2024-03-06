import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

// const input = document.getElementById("datetime-picker");
const btnStart = document.querySelector("button[data-start]");
const input = document.querySelector("#datetime-picker")
const dayTime = document.querySelector("span[data-days]");
const hourTime = document.querySelector("span[data-hours]");
const minTime = document.querySelector("span[data-minutes]");
const secTime = document.querySelector("span[data-seconds]");

btnStart.setAttribute("disabled", true);

// підключення бібліотеки
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date()
        if (selectedDates[0] < currentDate) {
            Notiflix.Notify.failure("Please choose a date in the future");
            btnStart.setAttribute("disabled", '');
            return
        } else {
            btnStart.removeAttribute("disabled")
        };
        btnStart.addEventListener("click", handleClick);
        function handleClick(e) {
            const id = setInterval(() => {
                timer(selectedDates[0], id);
              }, 1000);              
        }           
    }
};
flatpickr("#datetime-picker", options);

function timer(date, id) {
    const currentDate = new Date();
    const differenceDate = date - currentDate;

    if (differenceDate <= 0) {
        clearInterval(id);
        return
    }
    createTimer(convertMs(differenceDate));
}

function createTimer({days, hours, minutes, seconds}) {
    dayTime.textContent = days;
    hourTime.textContent = hours;
    minTime.textContent = minutes;
    secTime.textContent = seconds;
};

function addZero(value) {
    return String(value).padStart(2, "0");
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addZero(Math.floor(ms / day));
    const hours = addZero(Math.floor((ms % day) / hour));
    const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
}