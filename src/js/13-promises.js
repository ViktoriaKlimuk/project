import Notiflix from 'notiflix';

const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const btn = document.querySelector('button[type="submit"]');
const form = document.querySelector("form")

btn.addEventListener("click", handleClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => { 
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleClick(event) {
  event.preventDefault();

  for (let i = 0; i < amountInput.valueAsNumber; i += 1) {
    const promise = delayInput.valueAsNumber + stepInput.valueAsNumber * i;

    createPromise(i, promise)
      .then(({ position, delay }) => { 
        Notiflix.Notify.success(
          `Fulfilled promise ${position+1} in ${delay}ms`
          );
      })
      .catch(({ position, delay }) => { 
        Notiflix.Notify.failure(
          `Rejected promise ${position+1} in ${delay}ms`
          );
      });
  }
  form.reset()
}


