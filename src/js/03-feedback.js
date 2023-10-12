var throttle = require('lodash.throttle');

const emailForm = document.querySelector('input[name="email"]');
const textForm = document.querySelector('textarea[name="message"]');
const submit = document.querySelector('button');
const value = {};

if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  emailForm.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  value.email = emailForm.value;
}
if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  textForm.value = JSON.parse(localStorage.getItem('feedback-form-state')).text;
  value.text = textForm.value;
}

emailForm.addEventListener('input', throttle(logEmail, 500));
textForm.addEventListener('input', throttle(logText, 500));
submit.addEventListener('click', submitF);

function logEmail(event) {
  value.email = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(value));
}

function logText(event) {
  value.text = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(value));
}

function submitF(evt) {
  evt.preventDefault();
  if (emailForm.value && textForm.value) {
    const object = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(object);
    emailForm.value = '';
    textForm.value = '';

    localStorage.removeItem('feedback-form-state');
  } else {
    return alert('!!!!nedd to fill all text areas!!!!');
  }
}
