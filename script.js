const form = document.getElementById('form'),
      firstName = document.getElementById('firstName'),
      lastName = document.getElementById('lastName'),
      email = document.getElementById('email')
      password = document.getElementById('password');



const getFieldName = input => {
  return input.placeholder;
}

const showError = (input, message) => {
    const formControl = input.parentElement;
    input.classList.add("error-img");
    const span = formControl.querySelector("span");
    span.classList.add('display')
    span.innerText = message;
}

const showSuccess = input => {
    input.classList.add('success');
}

const checkRequired = inputArr => {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
          showError(input, `${getFieldName(input)} cannot be empty`);
        } else {
          showSuccess(input);
        }
      });
}

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(
          input,
          `${getFieldName(input)} must be at least ${min} characters`
        );
      } else if (input.value.length > max) {
        showError(
          input,
          `${getFieldName(input)} must be less than ${max} characters`
        );
      } else {
        showSuccess(input);
      }
}

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, "Email is not valid");
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    checkRequired([firstName, lastName, email, password]);
    checkLength(firstName, 3, 15);
    checkLength(lastName, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
});