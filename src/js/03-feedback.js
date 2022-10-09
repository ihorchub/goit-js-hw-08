import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const dataParce = JSON.parse(localStorage.getItem('feedback-form-state'));

let formData = {};
let email = '';
let message = '';

function addToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleInput(evt) {
  formData[evt.target.name] = evt.target.value;
  addToLocalStorage();
}

function handleSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

try {
  email = dataParce.email;
  message = dataParce.message;
  formData = dataParce;
} catch (error) {
  console.error('Get state error: ', error.message);
} finally {
  if (email) {
    feedbackForm.elements.email.value = email;
  } else {
    feedbackForm.elements.email.value = '';
  }
  if (message) {
    feedbackForm.elements.message.value = message;
  } else {
    feedbackForm.elements.message.value = '';
  }
}

feedbackForm.addEventListener('input', throttle(handleInput, 500));
feedbackForm.addEventListener('submit', handleSubmit);
