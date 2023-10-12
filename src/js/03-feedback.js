var throttle = require('lodash.throttle');

const emailForm = document.querySelector('input[name="email"]');
const textForm = document.querySelector('textarea[name="message"]');
const submit = document.querySelector('button');

if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  emailForm.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
}
if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  textForm.value = JSON.parse(localStorage.getItem('feedback-form-state')).text;
}

emailForm.addEventListener('input', throttle(logEmail, 500));
textForm.addEventListener('input', throttle(logText, 500));
submit.addEventListener('click', submitF);

const value = {
  email: '',
  text: '',
};

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

  const object = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(object));
  emailForm.value = '';
  textForm.value = '';

  localStorage.removeItem('feedback-form-state');
}
