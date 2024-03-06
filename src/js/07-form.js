const form = document.querySelector("form");

function fillForm(event) {
    event.preventDefault();
    const formFill = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;


    if (email === "" || password === "") {
        alert("You don`t fill all the fields.")
        return
    } else {
        const { email, password } = event.currentTarget.elements;
        const user = {
            email: email.value,
            password: password.value
        };
        console.log(user);
    }
    form.reset()
}

form.addEventListener("submit", fillForm)